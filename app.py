from flask import Flask, request, jsonify, session, redirect, url_for, send_file, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Configure la base de données SQLite
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///TerevaLoisirs.db'
db = SQLAlchemy(app)

# Clé secrète pour la gestion de session (veillez à la garder secrète en production)
app.secret_key = 'Cle!geh4M'

# Modèle de données pour les utilisateurs
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)


# Modèle de données pour les candidatures
class CareerApplication(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    cv = db.Column(db.LargeBinary, nullable=False)
    cover_letter = db.Column(db.LargeBinary, nullable=False)  

# Créez la base de données
with app.app_context():
    db.create_all()

@app.route('/')
def index():
    return "Hello, World"

@app.route('/register', methods=['POST'])
def register():
    if request.method == 'POST':
        data = request.get_json()
        new_user = User(username=data['username'], password=data['password'])
        with app.app_context():
            db.session.add(new_user)
            db.session.commit()
        return jsonify({'message': 'Utilisateur enregistre avec succes'})
    
@app.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    if request.method == 'DELETE':
        user = User.query.get(user_id)
        if user:
            db.session.delete(user)
            db.session.commit()
            return jsonify({'message': 'Utilisateur supprimé avec succès'})
        return jsonify({'message': 'Utilisateur introuvable'})

@app.route('/login', methods=['POST'])
def login():
    if request.method == 'POST':
        data = request.get_json()
        user = User.query.filter_by(username=data['username']).first()
        if user and user.password == data['password']:
            session['user_id'] = user.id
            return jsonify({'message': 'Connecte avec succes'})
        return jsonify({'message': 'Echec de la connexion'})

@app.route('/logout')
def logout():
    session.pop('user_id', None)
    return redirect(url_for('index'))


@app.route('/users')
def view_users():
    users = User.query.all()  # Récupère tous les utilisateurs depuis la base de données
    user_list = []
    for user in users:
        user_list.append({'id': user.id, 'username': user.username})
    return jsonify({'users': user_list})


@app.route('/career-applications', methods=['POST'])
def submit_career_application():
    if request.method == 'POST':
        data = request.form
        name = data.get('name')
        email = data.get('email')
        cv = request.files['cv']
        if cv:
            cv.save('uploads/' + cv.filename)
        cover_letter = request.files.get('coverLetter')
        if cover_letter:
            cover_letter.save('uploads/' + cover_letter.filename)

        # Stockez les données dans la base de données
        application = CareerApplication(name=name, email=email, cv=cv, cover_letter=cover_letter)
        db.session.add(application)
        db.session.commit()

        return jsonify({'message': 'Candidature enregistrée avec succès'})
    
@app.route('/career-applications', methods=['GET'])
def get_career_applications():
    if request.method == 'GET':
        applications = CareerApplication.query.all()
        application_list = []
        for application in applications:
            application_data = {
                'id': application.id,
                'name': application.name,
                'email': application.email,
                'cv_link': f'/get-cv/{application.id}',  # Exemple de lien vers le CV
                'cover_letter_link': f'/get-cover-letter/{application.id}',  # Exemple de lien vers la lettre de motivation
            }
            application_list.append(application_data)
        return jsonify({'applications': application_list})

@app.route('/get-cv/<int:application_id>', methods=['GET'])
def get_cv(application_id):
    application = CareerApplication.query.get(application_id)
    if application:
        cv = application.cv
        return send_file(io.BytesIO(cv), mimetype='application/pdf')
    else:
        return jsonify({'message': 'Candidature introuvable'})

@app.route('/get-cover-letter/<int:application_id>', methods=['GET'])
def get_cover_letter(application_id):
    application = CareerApplication.query.get(application_id)
    if application:
        cover_letter = application.cover_letter
        return send_file(io.BytesIO(cover_letter), mimetype='application/pdf')
    else:
        return jsonify({'message': 'Candidature introuvable'})


if __name__ == '__main__':
    app.run(debug=True)

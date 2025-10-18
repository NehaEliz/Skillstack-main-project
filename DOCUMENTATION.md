SkillStack Project Documentation


1. Project Overview

    SkillStack is an AI-driven learning management platform designed to help users track, categorize, and visualize their learning progress. It provides a centralized hub for managing learning resources, monitoring progress.


    Purpose:
    To empower learners to organize their skills, monitor learning hours, and identify gaps in their knowledge effectively.


    Key Features:

    Skill tracking and categorization

    Learning resource management

    Progress visualization (charts and graphs)

    Interactive dashboard for skill insights


2. Technology Stack

Frontend:

    React.js

    HTML5, CSS3, JavaScript

    Axios (for API requests)

    Custom CSS

Backend:

    Python (Flask)

    Flask-CORS for cross-origin requests

    BeautifulSoup 

    SQLite

Other Tools:

    Git & GitHub for version control

    Postman for API testing

    Virtual Environment (venv) for Python dependencies



3. Project Structure


    SkillStack/
    ├─ backend/          # Flask backend
    │  ├─ app.py
    |  |- database.py
    |  |- skills.db
    │  ├─ requirements.txt
    │  └─ ... 
    ├─ frontend/         # React frontend
    │  ├─ src/
    |  |
    │  ├─ package.json
    │  └─ ...
    ├─ README.md         # Project documentation
    └─ Demo.mp4          # Optional demo video





4. Setup Instructions

    Backend Setup
    1. Navigate to the backend folder:

        cd skillstack/backend

    2. Create and activate a virtual environment:

        python -m venv venv
        # Windows
        venv\Scripts\activate
        # Linux/Mac
        source venv/bin/activate
    
    3. Install dependencies:

        pip install -r requirements.txt


    4. Run the backend server:

        python app.py

        The backend should run at http://127.0.0.1:5000.

    
    Frontend Setup

       1.  Navigate to the frontend folder:

            cd skillstack/frontend

        2. Install dependencies:

            npm install


        3. Run the frontend server:

            npm start
            The frontend should open at http://localhost:3000.



5. Features in Detail

    Skill Management: Users can add, edit, and categorize skills.

    Learning Resources: Store links, documents, and notes related to each skill.

    Progress Tracking: Track hours spent learning, milestones achieved, and skills mastered.

    Dashboard & Visualization: Graphs and charts show skill distribution, progress trends, and learning gaps.


6. Future Enhancements

    Gamification (badges, levels)

    Social features (sharing skills with peers)

    Mobile application

    AI-powered skill gap analysis

    Integration with external learning platforms (Coursera, Udemy, etc.)


7. Contributors

    Neha Elizabeth AA – Full Stack Developer



8. References & Resources

Flask Documentation: https://flask.palletsprojects.com

React Documentation: https://reactjs.org/docs/getting-started.html

Python Virtual Environment: https://docs.python.org/3/library/venv.html
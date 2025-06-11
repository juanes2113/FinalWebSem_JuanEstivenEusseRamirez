# Semantic Web and Intelligent Agents Final Project

## Project Overview
This project is a web application for managing and displaying services, as well as receiving contact messages from users. It demonstrates the integration of a Node.js/Express backend with a MongoDB database and a pure HTML/CSS/JS frontend. The project also includes a conceptual ontology and documentation following semantic web principles.

## Structure
- **backend/**: Node.js + Express API, MongoDB models, routes, and controllers.
- **frontend/**: Static HTML, CSS, and JavaScript files for the user interface.
- **deliverables/**: Documentation and ontology files for the project.

## Installation and Execution
1. **Clone the repository**
2. **Backend setup:**
   - Go to the `backend` folder:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file with your MongoDB URI:
     ```env
     MONGODB_URI=your_mongodb_connection_string
     ```
   - Start the backend server:
     ```bash
     npm start
     ```
3. **Frontend setup:**
   - Open `frontend/index.html` in your browser, or use a local server if needed.

## Deliverables Folder
- **deliverables/ontology/ontology.md**: Conceptual ontology diagram and description (in Spanish).
- **deliverables/ontology/ontology.owl**: OWL file representing the ontology.
- **deliverables/visual_design.md**: Visual design and color palette justification (in Spanish).

## Main Features
- List and search services from the database.
- Submit contact messages via a form.
- RESTful API for services and contact messages.
- Semantic documentation and ontology.

## Authors
- Juan Pablo Zapata Alvarez
- Brian Stiven Torres Velasquez
- Diego Alejandro Zapata García
- Juan Estiven Eusse Ramirez

---
For more details, see the documentation in the `deliverables` folder.
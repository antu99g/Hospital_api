# Hospital API

This is a nodeJs api for storing and tracking reports of patients.
## Run the project

To run this project, run the following command

```bash
  npm start
```


## Tech Stack

`NodeJs` `MongoDB`

## Usage

- Creating and storing reports of patients
- Accessing all reports of a patient
- Filtering reports with same status
## API Reference

#### API Prefix

```bash
  https://hospital-api-0azz.onrender.com/
```


#### Routes

| Task | Method     | URL                       |
| :-------- | :------- | :-------------------------------- |
|   Register a doctor    | `POST` | `/doctors/register` |
|   Login a doctor    | `POST` | `/doctors/login` |
|   Register a patient    | `POST` | `/patients/register` |
|   Creating report    | `POST` | `/patients/:id/create_report` |
|   Fetching all reports <sub>(of a patient)</sub>    | `GET` | `/patients/:id/all_reports` |
|   Fetching all reports <sub>(with same status)</sub>    | `GET` | `/reports/:status` |
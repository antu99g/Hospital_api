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

```http
  https://hospital-api-0azz.onrender.com/
```


#### Routes

| Task | Method     | URL                       |
| :-------- | :------- | :-------------------------------- |
|   Register a doctor    | `POST` | `/doctors/register` |
|   Login a doctor    | `POST` | `/doctors/login` |
|   Register a patient    | `POST` | `/patients/register` |
|   Creating report    | `POST` | `/patients/:id/create_report` |
|   Fetching all reports <sup><sub>of a patient</sub></sup>    | `GET` | `/patients/:id/all_reports` |
|   Fetching all reports <sup><sub>with same status</sub></sup>    | `GET` | `/reports/:status` |
# MI-SALUD

## Descripción

MI-SALUD es un proyecto desarrollado en el modelo de programa dual. El proyecto consiste en la creación de un sistema de gestión de salud para la gestión de pacientes y médicos.

## Tecnologías usadas

- Node.js
- Express
- Sequelize
- PostgreSQL

## Autor

NONAME.

### Models of data

#### User

| name           | type   | description                      |
| -------------- | ------ | -------------------------------- |
| id             | int    | unique identifier of the patient |
| name           | string | name of the patient              |
| email          | string | email of the patient             |
| password       | string | password of the patient          |
| phone          | string | phone of the patient             |
| gender         | string | gender of the patient            |
| birthday       | date   | birthday of the patient          |
| profilePicture | string | URL of the patient's profile     |

#### Doctor

| name                   | type   | description                       |
| ---------------------- | ------ | --------------------------------- |
| id                     | int    | unique identifier of the doctor   |
| doctorSpecializationId | string | id of the doctor's specialization |
| doctorName             | string | name of the doctor                |
| doctorEmail            | string | email of the doctor               |
| doctorPhone            | string | phone of the doctor               |
| doctorGender           | string | gender of the doctor              |
| doctorBirthday         | date   | birthday of the doctor            |
| doctorProfilePicture   | string | URL of the doctor's profile       |
| doctorAvailability     | string | availability of the doctor        |

#### Appointment

| name      | type | description                     |
| --------- | ---- | ------------------------------- |
| id        | int  | unique identifier of the doctor |
| doctorId  | int  | id of the doctor                |
| patientId | int  | id of the patient               |
| hour      | int  | hour of the appointment         |
| reason    | int  | reason of the appointment       |

#### Patient-Doctor

| name      | type | description                     |
| --------- | ---- | ------------------------------- |
| id        | int  | unique identifier of the doctor |
| doctorId  | int  | id of the doctor                |
| patientId | int  | id of the patient               |

#### Commands for the models

- npx sequelize-cli model:generate --name User --attributes name:string,email:string,password:string,phone:string,gender:string,birthday:date,profilePicture:string

- npx sequelize-cli model:generate --name Doctor --attributes name:string,email:string,phone:string,gender:string,birthday:date,profilePicture:string,specialization:string,availability:string,hours:string,fees:string,services:string

- npx sequelize-cli model:generate --name Appointment --attributes doctorId:integer,patientId:integer,hour:time,reason:text

- npx sequelize-cli model:generate --name PatientDoctor --attributes doctorId:integer,patientId:integer

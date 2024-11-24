-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: school
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `course_name` varchar(100) NOT NULL,
  `credits` int NOT NULL,
  `description` text,
  `teacher_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_teacher` (`teacher_id`),
  CONSTRAINT `fk_teacher` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` VALUES (1,'Algebra I',3,'Introduction to algebraic concepts and principles.',1),(2,'Biology',4,'Study of living organisms and their interactions.',2),(3,'World History',3,'Comprehensive overview of global historical events.',3),(4,'English Literature',3,'Analysis of classic and contemporary literary works.',4),(5,'Physical Education',2,'Development of physical fitness and teamwork skills.',5);
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enrollments`
--

DROP TABLE IF EXISTS `enrollments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enrollments` (
  `student_id` int NOT NULL,
  `course_id` int NOT NULL,
  `enrollment_date` date NOT NULL,
  PRIMARY KEY (`student_id`,`course_id`),
  KEY `curso_id` (`course_id`),
  CONSTRAINT `fk_course` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_student` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enrollments`
--

LOCK TABLES `enrollments` WRITE;
/*!40000 ALTER TABLE `enrollments` DISABLE KEYS */;
INSERT INTO `enrollments` VALUES (1,1,'2024-09-01'),(2,2,'2024-09-02'),(3,3,'2024-09-03'),(4,4,'2024-09-04'),(5,5,'2024-09-05'),(6,1,'2024-09-06'),(7,2,'2024-09-07'),(8,3,'2024-09-08'),(9,4,'2024-09-09'),(10,5,'2024-09-10'),(11,1,'2024-09-11'),(12,2,'2024-09-12'),(13,3,'2024-09-13'),(14,4,'2024-09-14'),(15,5,'2024-09-15'),(16,1,'2024-09-16'),(17,2,'2024-09-17'),(18,3,'2024-09-18'),(19,4,'2024-09-19'),(20,5,'2024-09-20'),(21,1,'2024-09-21'),(22,2,'2024-09-22'),(23,3,'2024-09-23'),(24,4,'2024-09-24'),(25,5,'2024-09-25');
/*!40000 ALTER TABLE `enrollments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) NOT NULL,
  `date_of_birth` date NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `gender` enum('M','F','Other') NOT NULL,
  `grade_level` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (1,'Ana','2005-03-15','Gómez','ana.gomez@escuela.com','Calle 123, Ciudad','555-1234','F','10°'),(2,'Luis','2004-07-22','Martínez','luis.martinez@escuela.com','Avenida 456, Ciudad','555-5678','M','11°'),(3,'María','2005-11-30','Rodríguez','maria.rodriguez@escuela.com','Boulevard 789, Ciudad','555-9012','F','10°'),(4,'Carlos','2003-05-18','López','carlos.lopez@escuela.com','Plaza 321, Ciudad','555-3456','M','12°'),(5,'Laura','2004-09-05','Fernández','laura.fernandez@escuela.com','Camino 654, Ciudad','555-7890','F','11°'),(6,'Jorge','2005-02-25','Hernández','jorge.hernandez@escuela.com','Ruta 987, Ciudad','555-2345','M','10°'),(7,'Sofía','2004-12-10','García','sofia.garcia@escuela.com','Carrera 135, Ciudad','555-6789','F','11°'),(8,'Miguel','2003-08-14','Díaz','miguel.diaz@escuela.com','Paseo 246, Ciudad','555-0123','M','12°'),(9,'Elena','2005-04-03','Sánchez','elena.sanchez@escuela.com','Alameda 357, Ciudad','555-4567','F','10°'),(10,'Pedro','2004-06-21','Ramírez','pedro.ramirez@escuela.com','Autopista 468, Ciudad','555-8901','M','11°'),(11,'Isabella','2005-01-19','Torres','isabella.torres@escuela.com','Carretera 579, Ciudad','555-3456','F','10°'),(12,'Diego','2003-10-27','Vargas','diego.vargas@escuela.com','Ruta 680, Ciudad','555-7890','M','12°'),(13,'Valentina','2004-03-08','Castillo','valentina.castillo@escuela.com','Boulevard 791, Ciudad','555-1234','F','11°'),(14,'Sebastián','2005-05-16','Ortiz','sebastian.ortiz@escuela.com','Callejón 802, Ciudad','555-5678','M','10°'),(15,'Camila','2004-07-30','Morales','camila.morales@escuela.com','Avenida 913, Ciudad','555-9012','F','11°'),(16,'Andrés','2005-02-04','Silva','andres.silva@escuela.com','Plaza 024, Ciudad','555-3456','M','12°'),(17,'Natalia','2005-11-22','Rojas','natalia.rojas@escuela.com','Camino 135, Ciudad','555-7890','F','10°'),(18,'Diego','2004-02-04','Reyes','diego.reyes@escuela.com','Carrera 246, Ciudad','555-2345','M','11°'),(19,'Lucía','2005-04-17','Guerrero','lucia.guerrero@escuela.com','Paseo 357, Ciudad','555-6789','F','10°'),(20,'Fernando','2003-06-29','Vega','fernando.vega@escuela.com','Ruta 468, Ciudad','555-0123','M','12°'),(21,'Gabriela','2004-08-11','Flores','gabriela.flores@escuela.com','Alameda 579, Ciudad','555-4567','F','11°'),(22,'Emiliano','2005-10-05','Paredes','emiliano.paredes@escuela.com','Autopista 680, Ciudad','555-8901','M','10°'),(23,'Paula','2004-12-19','Navarro','paula.navarro@escuela.com','Boulevard 791, Ciudad','555-1234','F','11°'),(24,'Arturo','2003-03-25','Mendoza','arturo.mendoza@escuela.com','Callejón 802, Ciudad','555-5678','M','12°'),(25,'Daniela','2005-05-08','Gil','daniela.gil@escuela.com','Avenida 913, Ciudad','555-9012','F','10°'),(26,'Ricardo','2004-07-20','Medina','ricardo.medina@escuela.com','Plaza 024, Ciudad','555-3456','M','11°'),(27,'Patricia','2005-09-14','Fuentes','patricia.fuentes@escuela.com','Camino 135, Ciudad','555-7890','F','10°');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teachers`
--

DROP TABLE IF EXISTS `teachers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teachers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) NOT NULL,
  `department` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teachers`
--

LOCK TABLES `teachers` WRITE;
/*!40000 ALTER TABLE `teachers` DISABLE KEYS */;
INSERT INTO `teachers` VALUES (1,'John','Mathematics','Smith','john.smith@school.com','555-1001'),(2,'Emily','Science','Johnson','emily.johnson@school.com','555-1002'),(3,'Michael','History','Brown','michael.brown@school.com','555-1003'),(4,'Sarah','English','Davis','sarah.davis@school.com','555-1004'),(5,'David','Physical Education','Wilson','david.wilson@school.com','555-1005');
/*!40000 ALTER TABLE `teachers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-05 15:23:10

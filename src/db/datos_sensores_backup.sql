-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: datos_sensores
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

-- Tabla para almacenar datos del sensor de movimiento PIR
DROP TABLE IF EXISTS `movimiento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movimiento` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fecha_hora` DATETIME NOT NULL, -- Fecha y hora de detección
  `id_sensor` VARCHAR(50) NOT NULL, -- Identificador único del sensor
  `detectado` BOOLEAN NOT NULL, -- Si se detectó movimiento o no
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

-- Insertar datos simulados para el sensor de movimiento PIR
INSERT INTO `movimiento` (fecha_hora, id_sensor, detectado)
VALUES
  ('2024-11-22 08:00:00', 'PIR001', TRUE),
  ('2024-11-22 08:05:00', 'PIR002', FALSE),
  ('2024-11-22 08:10:00', 'PIR003', TRUE),
  ('2024-11-22 08:10:00', 'PIR003', TRUE),
  ('2024-11-22 08:15:00', 'PIR004', FALSE);

-- Tabla para almacenar datos del sensor de calidad de aire MQ-135
DROP TABLE IF EXISTS `calidad_aire`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `calidad_aire` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fecha_hora` DATETIME NOT NULL, -- Fecha y hora de la medición
  `id_sensor` VARCHAR(50) NOT NULL, -- Identificador único del sensor
  `nivel_co2` FLOAT NOT NULL, -- Concentración de gas en partes por millón
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

/*!40000 ALTER TABLE `calidad_aire` DISABLE KEYS */;
-- Insertar datos simulados para el sensor de calidad de aire MQ-135
INSERT INTO `calidad_aire` (fecha_hora, id_sensor, nivel_co2)
VALUES
  ('2024-11-22 08:00:00', 'MQ135001',  350.5),
  ('2024-11-22 08:05:00', 'MQ135002', 750.8),
  ('2024-11-22 08:10:00', 'MQ135003', 450.0),
  ('2024-11-22 08:10:00', 'MQ135003', 420.3),
  ('2024-11-22 08:15:00', 'MQ135004', 685.7);
/*!40000 ALTER TABLE `calidad_aire` ENABLE KEYS */;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-05 15:23:10

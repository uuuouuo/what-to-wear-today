-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: i6c106.p.ssafy.io    Database: websns
-- ------------------------------------------------------
-- Server version	8.0.28-0ubuntu0.20.04.3

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
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `comment_no` int NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `content` varchar(300) NOT NULL,
  `delete_mode` bit(1) NOT NULL,
  `private_mode` bit(1) NOT NULL,
  `feed_no` int NOT NULL,
  `parent_no` int DEFAULT NULL,
  `user_no` varchar(19) NOT NULL,
  PRIMARY KEY (`comment_no`),
  KEY `FKp3caa8swxcciijjehfr01v1je` (`feed_no`),
  KEY `FK4u1s73mhav3fh53cfvu05tenx` (`parent_no`),
  KEY `FKq0ekodjkru4a87f99qeyg28l0` (`user_no`),
  CONSTRAINT `FK4u1s73mhav3fh53cfvu05tenx` FOREIGN KEY (`parent_no`) REFERENCES `comment` (`comment_no`),
  CONSTRAINT `FKp3caa8swxcciijjehfr01v1je` FOREIGN KEY (`feed_no`) REFERENCES `feed` (`feed_no`),
  CONSTRAINT `FKq0ekodjkru4a87f99qeyg28l0` FOREIGN KEY (`user_no`) REFERENCES `user` (`user_no`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,'2022-02-16 14:18:07','2022-02-16 14:18:07','리얼 개춥긴하네',_binary '\0',_binary '\0',1,NULL,'a123412341234'),(2,'2022-02-16 17:45:38','2022-02-16 17:45:38','저는 춥던데요?',_binary '\0',_binary '\0',2,NULL,'1'),(7,'2022-02-17 00:58:01','2022-02-17 00:58:01','엥 난 괜찮던데,,',_binary '\0',_binary '\0',2,NULL,'1'),(8,'2022-02-17 02:38:59','2022-02-17 02:56:02','추위를 많이 타시나봐요',_binary '\0',_binary '\0',3,NULL,'a123412341234'),(10,'2022-02-17 02:55:58','2022-02-17 02:55:58','ㅜㅜㅜ 비 너무 싫어',_binary '\0',_binary '\0',3,NULL,'4'),(11,'2022-02-17 02:39:05','2022-02-17 02:39:05','지금은 좀 추워 졌어요',_binary '\0',_binary '\0',1,NULL,'2'),(12,'2022-02-17 15:26:34','2022-02-17 15:26:34','ㅋㅋㅋ',_binary '\0',_binary '\0',2,NULL,'2'),(13,'2022-02-17 18:14:11','2022-02-17 18:14:11','육수충님 하이 ~~',_binary '\0',_binary '\0',1,NULL,'4');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-18  8:57:43

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
-- Table structure for table `interest_region`
--

DROP TABLE IF EXISTS `interest_region`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `interest_region` (
  `interest_region_no` int NOT NULL AUTO_INCREMENT,
  `region_no` int NOT NULL,
  `user_no` varchar(19) NOT NULL,
  PRIMARY KEY (`interest_region_no`),
  KEY `FK2bvylpwg7w4petw24aiq0gcl0` (`region_no`),
  KEY `FK8rp0ga6g0rg3tcu1q199e4mjp` (`user_no`),
  CONSTRAINT `FK2bvylpwg7w4petw24aiq0gcl0` FOREIGN KEY (`region_no`) REFERENCES `region` (`region_no`),
  CONSTRAINT `FK8rp0ga6g0rg3tcu1q199e4mjp` FOREIGN KEY (`user_no`) REFERENCES `user` (`user_no`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `interest_region`
--

LOCK TABLES `interest_region` WRITE;
/*!40000 ALTER TABLE `interest_region` DISABLE KEYS */;
INSERT INTO `interest_region` VALUES (7,1,'a123412341234'),(8,2,'a123412341234');
/*!40000 ALTER TABLE `interest_region` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-18  8:57:38

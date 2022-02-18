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
-- Table structure for table `feed_tag`
--

DROP TABLE IF EXISTS `feed_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feed_tag` (
  `feed_tag_no` int NOT NULL AUTO_INCREMENT,
  `feed_no` int NOT NULL,
  `tag_no` int NOT NULL,
  PRIMARY KEY (`feed_tag_no`),
  KEY `FKlnuqa8l7tn0va9j81tkkhl6qd` (`feed_no`),
  KEY `FKld9veu1te4k8lbw77as1r0o9u` (`tag_no`),
  CONSTRAINT `FKld9veu1te4k8lbw77as1r0o9u` FOREIGN KEY (`tag_no`) REFERENCES `tag` (`tag_no`),
  CONSTRAINT `FKlnuqa8l7tn0va9j81tkkhl6qd` FOREIGN KEY (`feed_no`) REFERENCES `feed` (`feed_no`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feed_tag`
--

LOCK TABLES `feed_tag` WRITE;
/*!40000 ALTER TABLE `feed_tag` DISABLE KEYS */;
INSERT INTO `feed_tag` VALUES (1,1,1),(2,1,2),(3,2,3),(4,2,4),(5,3,3),(6,3,4),(7,4,5),(8,4,6),(9,1,3),(10,3,7),(11,6,7),(12,7,1),(13,8,2),(14,9,3),(15,10,4),(16,10,5),(17,11,6),(18,11,7),(19,12,1),(20,12,2),(21,6,3),(22,7,4),(23,8,5),(24,9,6),(25,10,7),(26,5,1),(27,4,2),(28,3,3);
/*!40000 ALTER TABLE `feed_tag` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-18  8:57:37

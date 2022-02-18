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
-- Table structure for table `feed_like_cnt`
--

DROP TABLE IF EXISTS `feed_like_cnt`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feed_like_cnt` (
  `feed_like_no` int NOT NULL AUTO_INCREMENT,
  `like_cnt` int NOT NULL,
  `feed_no` int NOT NULL,
  PRIMARY KEY (`feed_like_no`),
  KEY `FKmbyfuhgemtyklwhryy7fxkbws` (`feed_no`),
  CONSTRAINT `FKmbyfuhgemtyklwhryy7fxkbws` FOREIGN KEY (`feed_no`) REFERENCES `feed` (`feed_no`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feed_like_cnt`
--

LOCK TABLES `feed_like_cnt` WRITE;
/*!40000 ALTER TABLE `feed_like_cnt` DISABLE KEYS */;
INSERT INTO `feed_like_cnt` VALUES (1,2,1),(2,23,2),(3,54,3),(4,14,4),(5,55,6),(6,65,7),(7,123,8),(8,35,9),(9,76,10),(10,56,11),(11,345,12),(12,75,13),(13,185,14),(32,0,33),(33,0,34),(34,0,35),(35,0,36),(36,0,37),(37,0,38),(38,0,39),(39,0,40),(40,0,41),(41,0,42),(42,0,43);
/*!40000 ALTER TABLE `feed_like_cnt` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-18  8:57:39

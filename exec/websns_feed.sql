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
-- Table structure for table `feed`
--

DROP TABLE IF EXISTS `feed`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feed` (
  `feed_no` int NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `content` varchar(1000) NOT NULL,
  `delete_mode` bit(1) NOT NULL,
  `photo_date` timestamp NULL DEFAULT NULL,
  `private_mode` bit(1) NOT NULL,
  `weather` varchar(45) NOT NULL,
  `region_no` int NOT NULL,
  `user_no` varchar(19) NOT NULL,
  PRIMARY KEY (`feed_no`),
  KEY `FK4ihgww3od5ek6om604pqmtblv` (`region_no`),
  KEY `FKopddyghbbravxwgd3c7doi6gs` (`user_no`),
  CONSTRAINT `FK4ihgww3od5ek6om604pqmtblv` FOREIGN KEY (`region_no`) REFERENCES `region` (`region_no`),
  CONSTRAINT `FKopddyghbbravxwgd3c7doi6gs` FOREIGN KEY (`user_no`) REFERENCES `user` (`user_no`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feed`
--

LOCK TABLES `feed` WRITE;
/*!40000 ALTER TABLE `feed` DISABLE KEYS */;
INSERT INTO `feed` VALUES (1,'2022-02-16 13:20:59','2022-02-17 08:53:04','오늘 진짜 추워용 ㅠㅠ 모두들 따뜻하게 입으세요 !',_binary '\0','2022-02-15 23:41:00',_binary '\0','-9',1,'1'),(2,'2022-02-16 13:37:36','2022-02-17 08:56:30','오늘 춥다고 하더니 저는 괜찮은 것 같아요 ! 오히려 더운편?',_binary '\0','2022-02-17 23:41:00',_binary '\0','-9',1,'a123412341234'),(3,'2022-02-16 13:59:48','2022-02-17 09:08:40','으으 오늘 따뜻하다더니 저한테는 춥네요 ㅠㅠ 오늘 코트 입었습니다,, 저랑 비슷하신 분들은 따뜻하게 입으세요 !!!',_binary '\0','2022-02-17 23:41:00',_binary '\0','-9',1,'2'),(4,'2022-02-16 16:29:24','2022-02-10 09:10:25','오늘은 좀 더운 편이네욘! 봄인 줄 알았어요 !',_binary '\0','2022-02-15 23:41:00',_binary '\0','-9',1,'3'),(5,'2022-02-17 04:33:43','2022-02-10 09:10:44','뭐야 오늘 봄인가 ;; 왜케 따뜻하죠 ㅠㅠㅠ 놀러가고싶어 ㅠㅠㅠㅠ',_binary '\0',NULL,_binary '\0','10',1,'4'),(6,'2022-02-17 14:36:04','2022-02-10 19:35:10','오늘 저희 동네는 햇빛은 좋은데, 바람이 많이 부네요! 참고하세요 !',_binary '','2020-02-02 14:36:00',_binary '\0','11',1,'1'),(7,'2022-02-17 15:04:22','2022-02-10 15:04:22','오전에는 좀 쌀쌀했는데, 오후되니까 따뜻하네요 !',_binary '\0','2022-02-01 15:04:00',_binary '\0','12',1,'a123412341234'),(8,'2022-02-17 15:04:23','2022-02-16 15:26:27','오늘은 비와서 그런가 좀 쌀쌀한ㄴ 편 !',_binary '','2022-02-01 15:04:00',_binary '\0','12',1,'a432143214321'),(9,'2022-02-17 15:04:24','2022-02-15 15:04:24','얇게 입다간 큰일날 날씨네요 ㄷㄷ',_binary '\0','2022-02-01 15:04:00',_binary '\0','12',1,'1'),(10,'2022-02-17 15:04:28','2022-02-15 20:41:53','낮에는 따듯하더니 저녁되니까 추워용 ㅠㅠ',_binary '','2022-02-01 15:04:00',_binary '\0','12',1,'2'),(11,'2022-02-17 15:04:29','2022-02-15 15:04:29','육수충들 모여랏! 맞팔갑니당 !!!',_binary '\0','2022-02-01 15:04:00',_binary '\0','12',1,'3'),(12,'2022-02-17 15:04:29','2022-02-11 15:04:29','면목동에는 눈이 와요 이게 무슨일이죠',_binary '\0','2022-02-01 15:04:00',_binary '\0','12',1,'a123412341234'),(13,'2022-02-17 15:07:32','2022-02-14 15:07:32','오늘 비온다고 했나요? ㅠㅠ 우산 안가져왔는데 ㅠㅠ 다들 우산챙기세요',_binary '\0','2022-02-01 15:07:00',_binary '\0','2',1,'4'),(14,'2022-02-17 15:08:03','2022-02-14 15:08:03','오늘 비와서 장화를 신어봤습니다! 이쁘지 않나요?',_binary '\0','2022-02-01 15:08:00',_binary '\0','2',1,'a432143214321'),(31,'2022-02-17 21:13:29','2022-02-17 21:17:11','',_binary '','2022-02-18 06:13:00',_binary '\0','맑음 -4.8',1,'a123412341234'),(32,'2022-02-17 21:15:14','2022-02-17 21:15:14','ㅋㅋㄹㅃㅃ',_binary '\0','2020-02-02 06:15:00',_binary '\0','박무 -1.7',1,'a123412341234'),(33,'2022-02-17 21:32:59','2022-02-17 21:32:59','안양은 따뜻합니당~',_binary '\0','2022-02-07 21:32:00',_binary '\0',' -4.3',7,'a123412341234'),(34,'2022-02-17 21:35:25','2022-02-17 21:35:25','ㅎㅎㅎㅎㅎ',_binary '\0','2022-02-07 21:35:00',_binary '\0','구름많음 -0.9',6,'a123412341234'),(35,'2022-02-17 21:37:08','2022-02-17 21:37:08','하윙',_binary '\0','2022-02-22 21:37:00',_binary '\0','null null',5,'a123412341234'),(36,'2022-02-17 21:39:41','2022-02-17 21:39:41','안양은 따뜻합니다~',_binary '\0','2022-02-08 21:39:00',_binary '\0',' -8.0',1,'a123412341234'),(37,'2022-02-17 21:47:35','2022-02-17 21:47:35','얼죽코 모여라~~~',_binary '\0','2022-02-10 21:47:00',_binary '\0',' -3.6',1,'a123412341234'),(38,'2022-02-17 22:01:29','2022-02-17 22:01:29','너무 더워~~~',_binary '\0','2022-02-17 07:01:00',_binary '\0',' -10.1',1,'a123412341234'),(39,'2022-02-17 22:44:42','2022-02-17 22:44:42','졸리니깐 더 춥네요,,,',_binary '\0','2022-02-11 07:44:00',_binary '\0',' -4.7',1,'a123412341234'),(40,'2022-02-17 22:49:12','2022-02-17 22:49:12','날씨 좋아유~',_binary '\0','2022-02-11 07:49:00',_binary '\0',' -4.7',1,'a123412341234'),(41,'2022-02-17 22:50:23','2022-02-17 22:50:23','따뜻한 날씨~',_binary '\0','2022-02-16 07:50:00',_binary '\0',' -7.8',1,'a123412341234'),(42,'2022-02-17 22:53:31','2022-02-17 22:53:31','소풍 가기 좋은 날씨구만',_binary '\0','2022-02-17 07:53:00',_binary '\0',' -10.1',1,'a123412341234'),(43,'2022-02-17 22:56:10','2022-02-17 22:56:10','kjj',_binary '\0','2022-02-10 07:56:00',_binary '\0',' -0.9',1,'a123412341234');
/*!40000 ALTER TABLE `feed` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-18  8:57:45

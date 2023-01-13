-- MySQL dump 10.13  Distrib 5.7.9, for Win64 (x86_64)
--
-- Host: localhost    Database: examhall_db
-- ------------------------------------------------------
-- Server version	5.7.12-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `computer_science_class`
--

DROP TABLE IF EXISTS `computer_science_class`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `computer_science_class` (
  `Daytime` varchar(200) CHARACTER SET utf8mb4 NOT NULL,
  `FirstPeriod` varchar(200) CHARACTER SET utf8mb4 NOT NULL,
  `SecondPeriod` varchar(200) CHARACTER SET utf8mb4 NOT NULL,
  `ThirdPeriod` varchar(200) CHARACTER SET utf8mb4 NOT NULL,
  `FourthPeriod` varchar(200) CHARACTER SET utf8mb4 NOT NULL,
  `S/N` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `computer_science_class`
--

LOCK TABLES `computer_science_class` WRITE;
/*!40000 ALTER TABLE `computer_science_class` DISABLE KEYS */;
INSERT INTO `computer_science_class` VALUES ('MONDAY','COM213','COM214','','COM216',1),('TUESDAY','COM214','EED216','','COM212',2),('WEDNESDAY','','COM213','','COM212',3),('THURDAY','COM211','COM215','','GNS201',4),('FRIDAY','COM215','COM211','','',5);
/*!40000 ALTER TABLE `computer_science_class` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `examtimetable`
--

DROP TABLE IF EXISTS `examtimetable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `examtimetable` (
  `a` int(11) NOT NULL AUTO_INCREMENT,
  `Sno` varchar(200) CHARACTER SET utf8mb4 DEFAULT NULL,
  `Daytime` varchar(200) CHARACTER SET utf8mb4 DEFAULT NULL,
  `FirstPeriod` varchar(200) CHARACTER SET utf8mb4 DEFAULT NULL,
  `SecondPeriod` varchar(200) CHARACTER SET utf8mb4 DEFAULT NULL,
  `Venue` varchar(45) DEFAULT NULL,
  `Supervisor` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`a`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `examtimetable`
--

LOCK TABLES `examtimetable` WRITE;
/*!40000 ALTER TABLE `examtimetable` DISABLE KEYS */;
INSERT INTO `examtimetable` VALUES (1,'1','MONDAY 07-N0V-2022\r\n','EED413','COM314','',''),(2,'1','MONDAY 07-NOV-2022','COM111','',NULL,NULL),(4,'2','TUESDAY 08-NOV-2022','GNS401','COM311',NULL,NULL),(5,'2','TUESDAY 08-NOV-2022','GNS102','',NULL,NULL),(6,'3','WEDNESDAY 09-NOV-2022','GNS301','COM414',NULL,NULL),(7,'3','WEDNESDAY 09-NOV-2022','COM112','',NULL,NULL),(8,'4','THURSDAY 10-NOV-2022','STA411','COM315',NULL,NULL),(9,'4','THURSDAY 10-NOV-2022','','MTH112',NULL,NULL),(10,'5','FRIDAY 11-NOV-2022','COM415','',NULL,NULL),(11,'5','FRIDAY 11-NOV-2022','GNS101','',NULL,NULL),(12,'6','SATURDAY 12-NOV-2022','','',NULL,NULL),(13,'7','MONDAY 14-NOV-2022','COM411','COM313',NULL,NULL),(14,'7','MONDAY 14-NOV-2022','STA11','COM113',NULL,NULL),(15,'8','TUESDAY 15-NOV-2022','STA313','',NULL,NULL),(16,'8','TUESDAY 15-NOV-2022','MTH111','',NULL,NULL),(17,'9','WEDNESDAY 16-NOV-2022','COM312','COM413',NULL,NULL),(18,'10','THURSDAY 17-NOV-2022','','STA314',NULL,NULL),(19,'10','THURSDAY 17-NOV-2022','STA112/COM114','',NULL,NULL),(20,'11','FRIDAY 18-NOV-2022','COM412','',NULL,NULL),(21,'11','FRIDAY 18-NOV-2022','COM115','',NULL,NULL),(22,'12','SATURDAY 19-NOV-2022','','',NULL,NULL);
/*!40000 ALTER TABLE `examtimetable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `logintablex`
--

DROP TABLE IF EXISTS `logintablex`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `logintablex` (
  `username` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `Accessability` varchar(200) NOT NULL,
  `usertype` varchar(200) DEFAULT NULL,
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logintablex`
--

LOCK TABLES `logintablex` WRITE;
/*!40000 ALTER TABLE `logintablex` DISABLE KEYS */;
INSERT INTO `logintablex` VALUES ('mike','1234','False','lecturer',1),('ola','12345','True','admin',2),('jamiu','1234','False','student',3);
/*!40000 ALTER TABLE `logintablex` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-11 22:07:52

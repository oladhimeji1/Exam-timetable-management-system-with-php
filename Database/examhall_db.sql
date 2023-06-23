-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3302
-- Generation Time: Jun 23, 2023 at 04:13 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `examhall_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `computer_science_class`
--

CREATE TABLE `computer_science_class` (
  `Daytime` varchar(200) CHARACTER SET utf8mb4 NOT NULL,
  `FirstPeriod` varchar(200) CHARACTER SET utf8mb4 NOT NULL,
  `SecondPeriod` varchar(200) CHARACTER SET utf8mb4 NOT NULL,
  `ThirdPeriod` varchar(200) CHARACTER SET utf8mb4 NOT NULL,
  `FourthPeriod` varchar(200) CHARACTER SET utf8mb4 NOT NULL,
  `S/N` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

--
-- Dumping data for table `computer_science_class`
--

INSERT INTO `computer_science_class` (`Daytime`, `FirstPeriod`, `SecondPeriod`, `ThirdPeriod`, `FourthPeriod`, `S/N`) VALUES
('MONDAY', 'COM213', 'COM214', '', 'COM216', 1),
('TUESDAY', 'COM214', 'EED216', '', 'COM212', 2),
('WEDNESDAY', '', 'COM213', '', 'COM212', 3),
('THURDAY', 'COM211', 'COM215', '', 'GNS201', 4),
('FRIDAY', 'COM215', 'COM211', '', '', 5);

-- --------------------------------------------------------

--
-- Table structure for table `examtimetable`
--

CREATE TABLE `examtimetable` (
  `a` int(11) NOT NULL,
  `Datex` varchar(45) DEFAULT NULL,
  `Dayx` varchar(200) CHARACTER SET utf8mb4 DEFAULT NULL,
  `Timex` varchar(200) CHARACTER SET utf8mb4 DEFAULT NULL,
  `Course` varchar(45) DEFAULT NULL,
  `Venue` varchar(45) DEFAULT NULL,
  `Supervisor` varchar(200) CHARACTER SET utf8mb4 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `examtimetable`
--

INSERT INTO `examtimetable` (`a`, `Datex`, `Dayx`, `Timex`, `Course`, `Venue`, `Supervisor`) VALUES
(1, '2023-01-09', 'MONDAY', '8AM-10AM ', 'CSC405 ', 'BLOCK G', 'DR KOLAJO'),
(2, '2023-01-09', 'MONDAY', '11AM-1PM ', 'CSC433 ', 'BLOCK A', 'MR OLA'),
(3, '2023-01-09', 'MONDAY', '2PM-4PM ', 'CSC407 ', 'BLOCK G', 'DR EMEKA'),
(4, '2023-01-10', 'TUESDAY', '10AM-12PM ', 'CSC409 ', 'COMPUTER LAB', 'DR BASAKY'),
(5, '2023-01-10', 'TUESDAY', '12PM-1PM ', 'CSC403 ', 'ICT CENTER', 'DR YEMI'),
(6, '2023-01-10', 'TUESDAY', '2PM-4PM ', 'CSC401 ', 'BLOCK F', 'DR PETER'),
(7, '2023-01-11', 'WEDNESDAY', '10AM-12AM ', 'CSC403 ', 'BLOCK B', 'DR YEMI'),
(8, '2023-01-11', 'WEDNESDAY', '2PM-4PM ', 'CSC407 ', 'BLOCK D', 'DR EMEKA'),
(9, '2023-01-13', 'FRIDAY', '12PM-1PM ', 'CSC411 ', 'BLOCK B', 'MR ABU'),
(10, '2023-01-20', 'SATURDAY', '8:00 AM - 9:00 AM ', 'CSC201 ', 'LLR3', 'MR OLA'),
(13, '2023-01-21', 'SATURDAY', '3 ', 'CSC202 ', 'LLR', 'DIMEJI'),
(14, '2023-01-14', 'SATURDAY', '8:00 AM - 10:00 AM ', 'CSC 212 ', 'BLOCK G', 'MR OLA'),
(15, '2023-01-14', 'MONDAY', '10:00 AM - 12: 00 PM ', 'CSC212 ', 'BLOCK A', 'MR. MIKE'),
(16, '2023-01-15', 'MONDAY', '8:00 AM - 10:00 AM ', 'CSC 407 ', 'BLOCK C', 'MRS. FATI');

-- --------------------------------------------------------

--
-- Table structure for table `logintablex`
--

CREATE TABLE `logintablex` (
  `username` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `Accessability` varchar(200) NOT NULL,
  `usertype` varchar(200) DEFAULT NULL,
  `sno` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `logintablex`
--

INSERT INTO `logintablex` (`username`, `password`, `Accessability`, `usertype`, `sno`) VALUES
('mike', '1234', 'False', 'lecturer', 1),
('ola', '12345', 'True', 'admin', 2),
('jamiu', '1234', 'False', 'student', 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `examtimetable`
--
ALTER TABLE `examtimetable`
  ADD PRIMARY KEY (`a`);

--
-- Indexes for table `logintablex`
--
ALTER TABLE `logintablex`
  ADD PRIMARY KEY (`sno`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `examtimetable`
--
ALTER TABLE `examtimetable`
  MODIFY `a` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `logintablex`
--
ALTER TABLE `logintablex`
  MODIFY `sno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

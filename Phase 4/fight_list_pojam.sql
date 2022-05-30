-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 30, 2022 at 08:29 PM
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
-- Database: `brainpuzzles`
--

-- --------------------------------------------------------

--
-- Table structure for table `fight_list_pojam`
--

CREATE TABLE `fight_list_pojam` (
  `idP` int(11) NOT NULL,
  `idT` int(11) NOT NULL,
  `tekst` varchar(100) NOT NULL,
  `poeni` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fight_list_pojam`
--

INSERT INTO `fight_list_pojam` (`idP`, `idT`, `tekst`, `poeni`) VALUES
(1, 1, 'Toyota', 1),
(2, 1, 'Honda', 1),
(3, 1, 'Nissan', 1),
(4, 1, 'Suzuki', 1),
(5, 1, 'Lexus', 2),
(6, 1, 'Daihatsu', 3),
(7, 1, 'Mazda', 2),
(8, 2, 'Samsung', 1),
(9, 2, 'Apple', 1),
(10, 2, 'Xiaomi', 1),
(11, 2, 'Huawei', 1),
(12, 2, 'Zte', 3),
(13, 2, 'Htc', 2),
(14, 2, 'Lg', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fight_list_pojam`
--
ALTER TABLE `fight_list_pojam`
  ADD PRIMARY KEY (`idP`),
  ADD KEY `fl_pojam_idT_idx` (`idT`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fight_list_pojam`
--
ALTER TABLE `fight_list_pojam`
  MODIFY `idP` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `fight_list_pojam`
--
ALTER TABLE `fight_list_pojam`
  ADD CONSTRAINT `fl_pojam_idT` FOREIGN KEY (`idT`) REFERENCES `fight_list_tema` (`idT`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

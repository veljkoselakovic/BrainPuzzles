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
-- Table structure for table `fight_list_tema`
--

CREATE TABLE `fight_list_tema` (
  `idT` int(11) NOT NULL,
  `tema` varchar(100) NOT NULL,
  `idK` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fight_list_tema`
--

INSERT INTO `fight_list_tema` (`idT`, `tema`, `idK`) VALUES
(1, 'Japanese car manufacturers', 1),
(2, 'Phone manufacturers', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fight_list_tema`
--
ALTER TABLE `fight_list_tema`
  ADD PRIMARY KEY (`idT`),
  ADD KEY `FL_idK_idx` (`idK`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fight_list_tema`
--
ALTER TABLE `fight_list_tema`
  MODIFY `idT` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `fight_list_tema`
--
ALTER TABLE `fight_list_tema`
  ADD CONSTRAINT `FL_idK` FOREIGN KEY (`idK`) REFERENCES `korisnik` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

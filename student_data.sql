-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 07, 2024 at 11:04 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `student_data`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(200) NOT NULL,
  `name` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `password`) VALUES
(1, 'admin', '100');

-- --------------------------------------------------------

--
-- Table structure for table `student_registation`
--

CREATE TABLE `student_registation` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `middle_name` varchar(200) NOT NULL,
  `surname` varchar(200) NOT NULL,
  `email` varchar(300) NOT NULL,
  `mobile` varchar(200) NOT NULL,
  `father_mobail` varchar(254) NOT NULL,
  `adress` varchar(254) NOT NULL,
  `city` varchar(254) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `profile_pic` varchar(255) NOT NULL,
  `registation_date` date NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student_registation`
--

INSERT INTO `student_registation` (`id`, `name`, `middle_name`, `surname`, `email`, `mobile`, `father_mobail`, `adress`, `city`, `gender`, `profile_pic`, `registation_date`, `status`) VALUES
(4, 'ffff', 'fgfgfgg', 'fgfgf', 'sindhisima67@gmail.com', 'fdfd', 'fdfd', 'fdfd', 'fdfd', 'male', 'profile_pic_1722950560173_WIN_20240509_18_32_36_Pro.jpg', '2024-08-06', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student_registation`
--
ALTER TABLE `student_registation`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `student_registation`
--
ALTER TABLE `student_registation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

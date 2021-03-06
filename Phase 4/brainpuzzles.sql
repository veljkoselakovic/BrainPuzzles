-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 02, 2022 at 11:54 PM
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
-- Table structure for table `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add user', 4, 'add_user'),
(14, 'Can change user', 4, 'change_user'),
(15, 'Can delete user', 4, 'delete_user'),
(16, 'Can view user', 4, 'view_user'),
(17, 'Can add content type', 5, 'add_contenttype'),
(18, 'Can change content type', 5, 'change_contenttype'),
(19, 'Can delete content type', 5, 'delete_contenttype'),
(20, 'Can view content type', 5, 'view_contenttype'),
(21, 'Can add session', 6, 'add_session'),
(22, 'Can change session', 6, 'change_session'),
(23, 'Can delete session', 6, 'delete_session'),
(24, 'Can view session', 6, 'view_session'),
(25, 'Can add auth group', 7, 'add_authgroup'),
(26, 'Can change auth group', 7, 'change_authgroup'),
(27, 'Can delete auth group', 7, 'delete_authgroup'),
(28, 'Can view auth group', 7, 'view_authgroup'),
(29, 'Can add auth group permissions', 8, 'add_authgrouppermissions'),
(30, 'Can change auth group permissions', 8, 'change_authgrouppermissions'),
(31, 'Can delete auth group permissions', 8, 'delete_authgrouppermissions'),
(32, 'Can view auth group permissions', 8, 'view_authgrouppermissions'),
(33, 'Can add auth permission', 9, 'add_authpermission'),
(34, 'Can change auth permission', 9, 'change_authpermission'),
(35, 'Can delete auth permission', 9, 'delete_authpermission'),
(36, 'Can view auth permission', 9, 'view_authpermission'),
(37, 'Can add auth user', 10, 'add_authuser'),
(38, 'Can change auth user', 10, 'change_authuser'),
(39, 'Can delete auth user', 10, 'delete_authuser'),
(40, 'Can view auth user', 10, 'view_authuser'),
(41, 'Can add auth user groups', 11, 'add_authusergroups'),
(42, 'Can change auth user groups', 11, 'change_authusergroups'),
(43, 'Can delete auth user groups', 11, 'delete_authusergroups'),
(44, 'Can view auth user groups', 11, 'view_authusergroups'),
(45, 'Can add auth user user permissions', 12, 'add_authuseruserpermissions'),
(46, 'Can change auth user user permissions', 12, 'change_authuseruserpermissions'),
(47, 'Can delete auth user user permissions', 12, 'delete_authuseruserpermissions'),
(48, 'Can view auth user user permissions', 12, 'view_authuseruserpermissions'),
(49, 'Can add django admin log', 13, 'add_djangoadminlog'),
(50, 'Can change django admin log', 13, 'change_djangoadminlog'),
(51, 'Can delete django admin log', 13, 'delete_djangoadminlog'),
(52, 'Can view django admin log', 13, 'view_djangoadminlog'),
(53, 'Can add django content type', 14, 'add_djangocontenttype'),
(54, 'Can change django content type', 14, 'change_djangocontenttype'),
(55, 'Can delete django content type', 14, 'delete_djangocontenttype'),
(56, 'Can view django content type', 14, 'view_djangocontenttype'),
(57, 'Can add django migrations', 15, 'add_djangomigrations'),
(58, 'Can change django migrations', 15, 'change_djangomigrations'),
(59, 'Can delete django migrations', 15, 'delete_djangomigrations'),
(60, 'Can view django migrations', 15, 'view_djangomigrations'),
(61, 'Can add django session', 16, 'add_djangosession'),
(62, 'Can change django session', 16, 'change_djangosession'),
(63, 'Can delete django session', 16, 'delete_djangosession'),
(64, 'Can view django session', 16, 'view_djangosession'),
(65, 'Can add fight list pojam', 17, 'add_fightlistpojam'),
(66, 'Can change fight list pojam', 17, 'change_fightlistpojam'),
(67, 'Can delete fight list pojam', 17, 'delete_fightlistpojam'),
(68, 'Can view fight list pojam', 17, 'view_fightlistpojam'),
(69, 'Can add fight list tema', 18, 'add_fightlisttema'),
(70, 'Can change fight list tema', 18, 'change_fightlisttema'),
(71, 'Can delete fight list tema', 18, 'delete_fightlisttema'),
(72, 'Can view fight list tema', 18, 'view_fightlisttema'),
(73, 'Can add kzz odgovor', 19, 'add_kzzodgovor'),
(74, 'Can change kzz odgovor', 19, 'change_kzzodgovor'),
(75, 'Can delete kzz odgovor', 19, 'delete_kzzodgovor'),
(76, 'Can view kzz odgovor', 19, 'view_kzzodgovor'),
(77, 'Can add kzz pitanje', 20, 'add_kzzpitanje'),
(78, 'Can change kzz pitanje', 20, 'change_kzzpitanje'),
(79, 'Can delete kzz pitanje', 20, 'delete_kzzpitanje'),
(80, 'Can view kzz pitanje', 20, 'view_kzzpitanje'),
(81, 'Can add rezultat', 21, 'add_rezultat'),
(82, 'Can change rezultat', 21, 'change_rezultat'),
(83, 'Can delete rezultat', 21, 'delete_rezultat'),
(84, 'Can view rezultat', 21, 'view_rezultat'),
(85, 'Can add korisnik', 22, 'add_korisnik'),
(86, 'Can change korisnik', 22, 'change_korisnik'),
(87, 'Can delete korisnik', 22, 'delete_korisnik'),
(88, 'Can view korisnik', 22, 'view_korisnik'),
(89, 'Can add statistika', 23, 'add_statistika'),
(90, 'Can change statistika', 23, 'change_statistika'),
(91, 'Can delete statistika', 23, 'delete_statistika'),
(92, 'Can view statistika', 23, 'view_statistika');

-- --------------------------------------------------------

--
-- Table structure for table `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext DEFAULT NULL,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL CHECK (`action_flag` >= 0),
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(4, 'auth', 'user'),
(5, 'contenttypes', 'contenttype'),
(7, 'main', 'authgroup'),
(8, 'main', 'authgrouppermissions'),
(9, 'main', 'authpermission'),
(10, 'main', 'authuser'),
(11, 'main', 'authusergroups'),
(12, 'main', 'authuseruserpermissions'),
(13, 'main', 'djangoadminlog'),
(14, 'main', 'djangocontenttype'),
(15, 'main', 'djangomigrations'),
(16, 'main', 'djangosession'),
(17, 'main', 'fightlistpojam'),
(18, 'main', 'fightlisttema'),
(22, 'main', 'korisnik'),
(19, 'main', 'kzzodgovor'),
(20, 'main', 'kzzpitanje'),
(21, 'main', 'rezultat'),
(23, 'main', 'statistika'),
(6, 'sessions', 'session');

-- --------------------------------------------------------

--
-- Table structure for table `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` bigint(20) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2022-05-10 14:37:01.537582'),
(2, 'auth', '0001_initial', '2022-05-10 14:37:02.422889'),
(3, 'admin', '0001_initial', '2022-05-10 14:37:02.607418'),
(4, 'admin', '0002_logentry_remove_auto_add', '2022-05-10 14:37:02.619058'),
(5, 'admin', '0003_logentry_add_action_flag_choices', '2022-05-10 14:37:02.632931'),
(6, 'contenttypes', '0002_remove_content_type_name', '2022-05-10 14:37:02.714298'),
(7, 'auth', '0002_alter_permission_name_max_length', '2022-05-10 14:37:02.798265'),
(8, 'auth', '0003_alter_user_email_max_length', '2022-05-10 14:37:02.818967'),
(9, 'auth', '0004_alter_user_username_opts', '2022-05-10 14:37:02.831687'),
(10, 'auth', '0005_alter_user_last_login_null', '2022-05-10 14:37:02.895358'),
(11, 'auth', '0006_require_contenttypes_0002', '2022-05-10 14:37:02.901588'),
(12, 'auth', '0007_alter_validators_add_error_messages', '2022-05-10 14:37:02.912644'),
(13, 'auth', '0008_alter_user_username_max_length', '2022-05-10 14:37:02.935586'),
(14, 'auth', '0009_alter_user_last_name_max_length', '2022-05-10 14:37:02.957087'),
(15, 'auth', '0010_alter_group_name_max_length', '2022-05-10 14:37:02.977407'),
(16, 'auth', '0011_update_proxy_permissions', '2022-05-10 14:37:02.989522'),
(17, 'auth', '0012_alter_user_first_name_max_length', '2022-05-10 14:37:03.010565'),
(18, 'sessions', '0001_initial', '2022-05-10 14:37:03.177881'),
(19, 'main', '0001_initial', '2022-05-10 14:49:02.378321'),
(20, 'main', '0002_delete_authuser_delete_authusergroups_and_more', '2022-05-10 15:02:06.357033');

-- --------------------------------------------------------

--
-- Table structure for table `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `django_session`
--

INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES
('2mi9yy9we6yqpt8j0408h4deap38agmw', '.eJxVjs0KwjAQhN8l51qSNklTjyKIoDdvIiU_W1O1DTQJKOK7m0APepud-WbYN-pkDLaLHuZuMGiNCCp-PSX1HaYcmJucrq7UbgrzoMqMlEvqy6Mz8Ngs7N-Ald6mtmB9zTgnimOMeYUbTmuqlekZUVXNMau4UK2mDa8MtCCEYY0wSjDoKWtZm0bHfXpjRQoULIyQj6znAcwugvfg0fqMTu7lgkz0Vg5WBh-TPMAzenT5fAFUkEug:1nwsmF:FZaGrXfOzDzEYmRQVy9OomvJrhLwT4pjx-xxozCe0F0', '2022-06-16 21:54:47.321280');

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
(6, 1, 'Subaru', 2),
(7, 1, 'Mitsubishi', 3),
(8, 1, 'Daihatsu', 3),
(9, 1, 'Mazda', 2),
(10, 2, 'Samsung', 1),
(11, 2, 'Apple', 1),
(12, 2, 'Xiaomi', 1),
(13, 2, 'Huawei', 1),
(14, 2, 'Zte', 3),
(15, 2, 'Htc', 2),
(16, 2, 'Acer', 2),
(17, 2, 'Lenovo', 2),
(18, 2, 'Hp', 3),
(19, 2, 'Nokia', 1),
(20, 2, 'Sony', 1),
(21, 2, 'Lg', 2),
(22, 3, 'Iva', 3),
(23, 3, 'Ivana', 1),
(24, 3, 'Ivona', 1),
(25, 3, 'Ivka', 3),
(26, 3, 'Isidora', 1),
(27, 3, 'Ivanka', 2),
(28, 3, 'Irina', 2),
(29, 3, 'Ilinka', 3),
(30, 3, 'Ikonija', 3),
(31, 3, 'Iris', 2),
(32, 3, 'Iskra', 2),
(33, 4, 'Maxi', 1),
(34, 4, 'Dis', 2),
(35, 4, 'Idea', 1),
(36, 4, 'Roda', 1),
(37, 4, 'Super Vero', 3),
(38, 4, 'Metro', 2),
(39, 4, 'Tempo', 2),
(40, 4, 'Univerexport', 2),
(41, 4, 'Lidl', 2),
(42, 5, 'Madagaskar', 1),
(43, 5, 'Malezija', 2),
(44, 5, 'Maldivi', 2),
(45, 5, 'Makedonija', 1),
(46, 5, 'Malta', 1),
(47, 5, 'Monako', 1),
(48, 5, 'Mauricijus', 2),
(49, 5, 'Mongolija', 2),
(50, 5, 'Mozambik', 3),
(51, 5, 'Meksiko', 1),
(52, 5, 'Maroko', 2);

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
(1, 'Marke automobila Japanskog porekla', 1),
(2, 'Marke telefona', 1),
(3, 'Zenska imena na slovo I', 1),
(4, 'Lanci supermarketa u Srbiji', 1),
(5, 'Drzave na slovo M', 1);

-- --------------------------------------------------------

--
-- Table structure for table `korisnik`
--

CREATE TABLE `korisnik` (
  `id` int(11) NOT NULL,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  `opis` varchar(200) DEFAULT NULL,
  `titula` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `korisnik`
--

INSERT INTO `korisnik` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`, `opis`, `titula`) VALUES
(1, 'pbkdf2_sha256$320000$BmVKgJcPdmR9pBjQgUQlEm$VcQe6hQHuwo4O3agS8/FIXAjcAESIIVqH7W9EGmSK+E=', '2022-06-02 21:50:37.789875', 1, 'veljko', 'Veljko', 'Selakovic', 'veljko@gmail.com', 1, 1, '2022-05-10 15:16:06.941447', 'goDaddy', 'Srebrni'),
(2, 'pbkdf2_sha256$320000$BmVKgJcPdmR9pBjQgUQlEm$VcQe6hQHuwo4O3agS8/FIXAjcAESIIVqH7W9EGmSK+E=', '2022-05-16 22:22:36.627720', 1, 'teodor', 'Teodor', 'Delibasic', 'teodor@gmail.com', 0, 0, '2022-05-10 15:16:06.941447', 'Microsoft', 'Srebrni'),
(3, 'pbkdf2_sha256$320000$BmVKgJcPdmR9pBjQgUQlEm$VcQe6hQHuwo4O3agS8/FIXAjcAESIIVqH7W9EGmSK+E=', '2022-05-16 22:22:36.627720', 1, 'iva', 'Iva', 'Rakic', 'iva@yahoo.com', 0, 0, '2022-05-10 15:16:06.941447', '', 'Zlatni'),
(20, 'pbkdf2_sha256$320000$BmVKgJcPdmR9pBjQgUQlEm$VcQe6hQHuwo4O3agS8/FIXAjcAESIIVqH7W9EGmSK+E=', '2022-06-02 17:11:47.715946', 0, 'Guest', '', '', 'guest@guest.com', 0, 1, '2022-06-02 16:51:09.000000', 'Guest', 'Bronzani');

-- --------------------------------------------------------

--
-- Table structure for table `korisnik_groups`
--

CREATE TABLE `korisnik_groups` (
  `id` bigint(20) NOT NULL,
  `korisnik_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `korisnik_user_permissions`
--

CREATE TABLE `korisnik_user_permissions` (
  `id` bigint(20) NOT NULL,
  `korisnik_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `kzz_odgovor`
--

CREATE TABLE `kzz_odgovor` (
  `idO` int(11) NOT NULL,
  `idP` int(11) NOT NULL,
  `tekst` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kzz_odgovor`
--

INSERT INTO `kzz_odgovor` (`idO`, `idP`, `tekst`) VALUES
(1, 1, 'Novi Sad'),
(2, 2, 'Kompozitorka'),
(3, 3, 'Osam'),
(4, 4, 'Kanbera'),
(5, 5, 'Tigar'),
(6, 6, 'Azija'),
(7, 7, 'Bela'),
(8, 8, 'Jupiter'),
(9, 9, 'Brus Vilis'),
(10, 10, 'Florida'),
(11, 11, 'Pb'),
(12, 12, 'Norveska'),
(13, 13, 'Erih Marija Remark'),
(14, 14, 'Formula 1'),
(15, 15, 'Kanade'),
(16, 16, 'Instrument'),
(17, 17, 'Frensis Ford Kopola'),
(18, 18, 'Apeninskom'),
(19, 19, 'Pingvin'),
(20, 20, 'Ada');

-- --------------------------------------------------------

--
-- Table structure for table `kzz_pitanje`
--

CREATE TABLE `kzz_pitanje` (
  `idP` int(11) NOT NULL,
  `tekst` varchar(300) NOT NULL,
  `idK` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kzz_pitanje`
--

INSERT INTO `kzz_pitanje` (`idP`, `tekst`, `idK`) VALUES
(1, 'Koji od srpskih gradova je u pro??losti nazivan srpskom Atinom?', 1),
(2, 'Ljubica Mari?? je poznata srpska?', 1),
(3, 'Koliko nogu ima pauk? (slovima napisati)', 1),
(4, 'Koji je glavni grad Australije?', 1),
(5, 'Koja je nacionalna zivotinja Indije?', 1),
(6, 'Koji je najveci kontinent na svetu?', 1),
(7, 'Koja boja je simbol za mir?', 1),
(8, 'Koja je najveca planeta Suncevog sistema?', 1),
(9, 'Glavnu ulogu u filmu Umri Mu??ki glumi?', 1),
(10, 'Grad Majami se nalazi u kojoj ameri??koj dr??avi?', 1),
(11, 'Hemijska oznaka za olovo je?', 1),
(12, 'Pobednik pesme Evrovizije za 2009 je?', 1),
(13, 'Ko je napisao ???Trijumfalnu kapiju????', 1),
(14, 'Uz koji sport se vezuje ime Mihael ??umaher?', 1),
(15, 'Javorov list je simbol koje drzave?', 1),
(16, '??ta je oboa?', 1),
(17, 'Film ???Kum??? re??irao je', 1),
(18, 'Na kom poluostrvu se nalazi Italija?', 1),
(19, 'Koja ??ivotinja je za??titni znak linux operativnog sistema?', 1),
(20, 'Koji programski jezik je prvi nastao?', 1);

-- --------------------------------------------------------

--
-- Table structure for table `rezultat`
--

CREATE TABLE `rezultat` (
  `idM` int(11) NOT NULL,
  `idK` int(11) NOT NULL,
  `fightListRezultat` int(11) DEFAULT NULL,
  `mozgicRezultat` int(11) DEFAULT NULL,
  `kzzRezultat` int(11) DEFAULT NULL,
  `rezultat` int(11) DEFAULT NULL,
  `vremeIgranja` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rezultat`
--

INSERT INTO `rezultat` (`idM`, `idK`, `fightListRezultat`, `mozgicRezultat`, `kzzRezultat`, `rezultat`, `vremeIgranja`) VALUES
(1, 1, 8, NULL, NULL, 8, '2022-06-02 23:50:46'),
(2, 1, 4, NULL, NULL, 4, '2022-06-02 23:51:07'),
(3, 1, 8, NULL, NULL, 8, '2022-06-02 23:51:43'),
(4, 1, 6, NULL, NULL, 6, '2022-06-02 23:52:33'),
(5, 1, 4, NULL, NULL, 4, '2022-06-02 23:52:58'),
(6, 1, 6, 15, NULL, 21, '2022-06-02 23:53:42');

-- --------------------------------------------------------

--
-- Table structure for table `statistika`
--

CREATE TABLE `statistika` (
  `idK` int(11) NOT NULL,
  `highScore` int(11) DEFAULT 0,
  `totalScore` int(11) DEFAULT 0,
  `brOdigranih` int(11) DEFAULT 0,
  `prosek` double DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `statistika`
--

INSERT INTO `statistika` (`idK`, `highScore`, `totalScore`, `brOdigranih`, `prosek`) VALUES
(1, 21, 51, 6, 8.5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Indexes for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`);

--
-- Indexes for table `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Indexes for table `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- Indexes for table `fight_list_pojam`
--
ALTER TABLE `fight_list_pojam`
  ADD PRIMARY KEY (`idP`),
  ADD KEY `fl_pojam_idT_idx` (`idT`);

--
-- Indexes for table `fight_list_tema`
--
ALTER TABLE `fight_list_tema`
  ADD PRIMARY KEY (`idT`),
  ADD KEY `FL_idK_idx` (`idK`);

--
-- Indexes for table `korisnik`
--
ALTER TABLE `korisnik`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `korisnik_groups`
--
ALTER TABLE `korisnik_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `korisnik_groups_korisnik_id_group_id_8c5ba7f0_uniq` (`korisnik_id`,`group_id`),
  ADD KEY `korisnik_groups_group_id_639f924a_fk_auth_group_id` (`group_id`);

--
-- Indexes for table `korisnik_user_permissions`
--
ALTER TABLE `korisnik_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `korisnik_user_permission_korisnik_id_permission_i_f0bb31ce_uniq` (`korisnik_id`,`permission_id`),
  ADD KEY `korisnik_user_permis_permission_id_ed48e217_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `kzz_odgovor`
--
ALTER TABLE `kzz_odgovor`
  ADD PRIMARY KEY (`idO`),
  ADD KEY `kzz_odgovor_idP_idx` (`idP`);

--
-- Indexes for table `kzz_pitanje`
--
ALTER TABLE `kzz_pitanje`
  ADD PRIMARY KEY (`idP`),
  ADD KEY `kzz_pitanje_idK_idx` (`idK`);

--
-- Indexes for table `rezultat`
--
ALTER TABLE `rezultat`
  ADD PRIMARY KEY (`idM`),
  ADD KEY `rezultati_idK_idx` (`idK`);

--
-- Indexes for table `statistika`
--
ALTER TABLE `statistika`
  ADD PRIMARY KEY (`idK`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;

--
-- AUTO_INCREMENT for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `fight_list_pojam`
--
ALTER TABLE `fight_list_pojam`
  MODIFY `idP` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `fight_list_tema`
--
ALTER TABLE `fight_list_tema`
  MODIFY `idT` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `korisnik`
--
ALTER TABLE `korisnik`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `korisnik_groups`
--
ALTER TABLE `korisnik_groups`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `korisnik_user_permissions`
--
ALTER TABLE `korisnik_user_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kzz_odgovor`
--
ALTER TABLE `kzz_odgovor`
  MODIFY `idO` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `kzz_pitanje`
--
ALTER TABLE `kzz_pitanje`
  MODIFY `idP` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `rezultat`
--
ALTER TABLE `rezultat`
  MODIFY `idM` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `statistika`
--
ALTER TABLE `statistika`
  MODIFY `idK` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Constraints for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Constraints for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `korisnik` (`id`);

--
-- Constraints for table `fight_list_pojam`
--
ALTER TABLE `fight_list_pojam`
  ADD CONSTRAINT `fl_pojam_idT` FOREIGN KEY (`idT`) REFERENCES `fight_list_tema` (`idT`);

--
-- Constraints for table `fight_list_tema`
--
ALTER TABLE `fight_list_tema`
  ADD CONSTRAINT `FL_idK` FOREIGN KEY (`idK`) REFERENCES `korisnik` (`id`);

--
-- Constraints for table `korisnik_groups`
--
ALTER TABLE `korisnik_groups`
  ADD CONSTRAINT `fk_IdK_2` FOREIGN KEY (`korisnik_id`) REFERENCES `korisnik` (`id`),
  ADD CONSTRAINT `korisnik_groups_group_id_639f924a_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Constraints for table `korisnik_user_permissions`
--
ALTER TABLE `korisnik_user_permissions`
  ADD CONSTRAINT `korisnik_user_` FOREIGN KEY (`korisnik_id`) REFERENCES `korisnik` (`id`),
  ADD CONSTRAINT `korisnik_user_permis_permission_id_ed48e217_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`);

--
-- Constraints for table `kzz_odgovor`
--
ALTER TABLE `kzz_odgovor`
  ADD CONSTRAINT `kzz_odgovor_idP` FOREIGN KEY (`idP`) REFERENCES `kzz_pitanje` (`idP`);

--
-- Constraints for table `kzz_pitanje`
--
ALTER TABLE `kzz_pitanje`
  ADD CONSTRAINT `kzz_pitanje_idK` FOREIGN KEY (`idK`) REFERENCES `korisnik` (`id`);

--
-- Constraints for table `rezultat`
--
ALTER TABLE `rezultat`
  ADD CONSTRAINT `fk_IdK` FOREIGN KEY (`idK`) REFERENCES `korisnik` (`id`);

--
-- Constraints for table `statistika`
--
ALTER TABLE `statistika`
  ADD CONSTRAINT `fk_Korisnik` FOREIGN KEY (`idK`) REFERENCES `korisnik` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 21 Sie 2021, 12:36
-- Wersja serwera: 10.1.36-MariaDB
-- Wersja PHP: 7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `currency-exchange`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `currency`
--

CREATE TABLE `currency` (
  `user_id` int(11) DEFAULT NULL,
  `PLN` int(11) NOT NULL DEFAULT '1500',
  `USD` int(11) NOT NULL DEFAULT '0',
  `EUR` int(11) NOT NULL DEFAULT '0',
  `CHF` int(11) NOT NULL DEFAULT '0',
  `RUB` int(11) NOT NULL DEFAULT '0',
  `CZK` int(11) NOT NULL DEFAULT '0',
  `GBP` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `currency`
--

INSERT INTO `currency` (`user_id`, `PLN`, `USD`, `EUR`, `CHF`, `RUB`, `CZK`, `GBP`) VALUES
(1, 1449, 3, 0, 0, 0, 0, 0),
(2, 1499, 0, 0, 0, 0, 0, 0),
(3, 1500, 0, 0, 0, 0, 0, 0),
(4, 1500, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(100) COLLATE utf8_polish_ci NOT NULL,
  `username` varchar(100) COLLATE utf8_polish_ci NOT NULL,
  `password` varchar(100) COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `users`
--

INSERT INTO `users` (`id`, `email`, `username`, `password`) VALUES
(1, 'admin@exchange.pl', 'admin', 'd8578edf8458ce06fbc5bb76a58c5ca4'),
(2, 'admin1@admin.adm', 'admin1', '21232f297a57a5a743894a0e4a801fc3'),
(3, 'test@test.test', 'testt', '147538da338b770b61e592afc92b1ee6'),
(4, 'test@test.testaa', 'test1', '5a105e8b9d40e1329780d62ea2265d8a');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `currency`
--
ALTER TABLE `currency`
  ADD KEY `user_id` (`user_id`);

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `currency`
--
ALTER TABLE `currency`
  ADD CONSTRAINT `currency_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

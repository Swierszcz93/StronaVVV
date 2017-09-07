w tym pliku znajduje się instrukcja jak postępować z projektem

OPIS KATALOGÓW I PLIKÓW

components - podkomponenty używane na naszej stronie, m. in.: menu czy stopka kontaktowa

css - katalog na arkusze stylów

datafiles - katalog na wszelkie pliki z danymi, pojedyncza dana ZAWSZE odzielona jest nową liną
datafiles/40lvl.txt - plik z którego tworzy się tabelka, wzór:
[nick];[data]
datafiles/movies - plik z którego tworzą się filmy na stronie, wzór:
[nazwa filmu];[autor];[link do YT]
datafiles/nicki.txt - plik z nickami graczy, wzór
[nick]
datafiles/[guides|resources].txt - plik z zasobami do poradnikow i materialow, konwencja
nazwa_poradnika/zasobu;plik_z_zasobem.txt

katalog guides oraz resources sa  blizniaczopodobne i maja te same zasady contentu plikow
roznice tworza pliki resources.txt oraz guides.txt w katalogu datafiles
guides - katalog z którego będą pobieranie poradniki
guides/images - katlog na obrazki do poradnikow
guides/sites - pliki txt z contentem, dopuszczalne tagi
title - tytul na normalnym tle, duze litery
stitle - tytul sekcji, na bialym tle, mniejsze litery
text - zwykly tekst

table - tabelka z contentem, przyklad, konwencja:
table;[<th|td,number>]cell_content|cell_content;cell_content|cell_content

img - obrazek, konwencja:
img;[width];[height];image_source

video - filmik z YT, konwencja:
video;[width];[height];video_link

author - maly tekst po prawej napisany kursywa

images - katalog na obrazki używane na stronie

js - katalog na skrypty używane na stronie

pliki *html - pliki z podstronami na stronie

robots.txt - plik z infomracjami dla serwera, nie edytować
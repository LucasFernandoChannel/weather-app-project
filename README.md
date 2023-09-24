# Weather App project
This repository stores all the files used in the Weather App project. It's a website that contains a input text field and a button. The user can type any city name that the system will display the current temperature, air humidity, and weather description (sunny, cloudy, and so on). If the app doesn't find out any information about the city, it informs the user should check what he wrote and try again.

In fact, this project is a front-end application. There is a Javascript file that calls the OpenWeather API passing the city name and getting a string full of data. It extracts the right information and put it inside the correct HTML tags. To make it work, you must edit the **api_key** variable to store your own API key (this key is provided when you create an OpenWeather account). For example:

**const api_key = "&appid=9b29dghi2ed1ft259329351e44f3d904";**

First page
![Screenshot of a first page.](https://github.com/LucasFernandoChannel/weather-app-project/blob/main/screenshots/page01.png)

Results for the search Florianópolis
![Screenshot of the results for the search Florianópolis.](https://github.com/LucasFernandoChannel/weather-app-project/blob/main/screenshots/page02.png)

Error message displayed after searching a city that doesn't exist
![Screenshot of the error message displayed after searching a city that doesn't exist.](https://github.com/LucasFernandoChannel/weather-app-project/blob/main/screenshots/page03.png)

The images above show the application running from a local computer. But it can also run from a Docker environment as you can see below.

![Screenshot of the first page running from Docker environment.](https://github.com/LucasFernandoChannel/weather-app-project/blob/main/screenshots/page04.png)

# Projeto aplicativo web da previsão do tempo
Este repositório guarda todos os arquivos usados no projeto aplicativo web da previsão do tempo. Isso é um site que contém um campo de texto e um botão. O usuário pode digitar o nome de qualquer cidade que o sistema irá mostrar a temperatura atual, humidade relativa do ar e uma descrição do tempo (ensolarado, nublado e assim por diante). Se o aplicativo não encontrar nenhuma informação sobre a cidade, ele informa ao usuário que deveria checar o que escreveu e tentar novamente.

Na verdade esse projeto é uma aplicação front-end. Há um arquivo Javascript que chama a API OpenWeather passando o nome da cidade e recebendo um texto cheio de dados. O códifo extraí a informação correta e a coloca dentro das tags HTML adequadas. Para fazer isso funcionar, você precisa editar a variável **api_key** para armazenar a sua própria chave API (essa chave é providenciada quando você cria uma conta OpenWeather). Por exemplo:

**const api_key = "&appid=9b29dghi2ed1ft259329351e44f3d904";**

Página inicial
![Screenshot of a first page.](https://github.com/LucasFernandoChannel/weather-app-project/blob/main/screenshots/page01.png)

Resultados para a pesquisa Florianópolis
![Screenshot of the results for the search Florianópolis.](https://github.com/LucasFernandoChannel/weather-app-project/blob/main/screenshots/page02.png)

Mensagem de erro exibida após pesquisar uma cidade que não existe
![Screenshot of the error message displayed after searching a city that doesn't exist.](https://github.com/LucasFernandoChannel/weather-app-project/blob/main/screenshots/page03.png)

As imagens acima mostram a aplicação rodando de um computado local. Mas o programa também pode ser executado a partir de um ambiente Docker, como você pode ver abaixo.

![Screenshot of the first page running from Docker environment.](https://github.com/LucasFernandoChannel/weather-app-project/blob/main/screenshots/page04.png)

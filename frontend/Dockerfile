# Estágio de construção (build)
FROM node:18.19 as build

# Crie um diretório de trabalho no contêiner
WORKDIR /app

# Instale o Angular CLI globalmente
RUN npm install -g @angular/cli

# Copie o arquivo package.json para o contêiner
COPY package.json .

# Instale as dependências
RUN npm install --legacy-peer-deps

# Copie os arquivos do projeto para dentro do contêiner
COPY . .

# Construa a aplicação Angular
RUN ng build --configuration=production

# Estágio final
FROM nginx:alpine

# Copie a aplicação Angular construída para o diretório do servidor web
COPY --from=build /app/dist/inventory-app /usr/share/nginx/html

# Exponha a porta 80
EXPOSE 80

# Inicie o Nginx
CMD ["nginx", "-g", "daemon off;"]

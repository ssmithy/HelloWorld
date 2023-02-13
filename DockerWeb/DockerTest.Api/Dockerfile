#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
 
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["DockerTest.Api/DockerTest.Api.csproj", "DockerTest.Api/"]
RUN dotnet restore "DockerTest.Api/DockerTest.Api.csproj"
COPY . .
WORKDIR "/src/DockerTest.Api"
RUN dotnet build "DockerTest.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "DockerTest.Api.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "DockerTest.Api.dll"] 
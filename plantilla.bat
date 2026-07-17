@echo off
setlocal

if "%~1"=="" (
    echo Us: %~nx0 nom_fitxer
    exit /b 1
)

set "NOM=%~1"

if not exist "%~dp0plantilla.html" type nul > "%~dp0plantilla.html"
if not exist "%~dp0css\plantilla.css" type nul > "%~dp0css\plantilla.css"
if not exist "%~dp0js\plantilla.js" type nul > "%~dp0js\plantilla.js"

copy /Y "%~dp0plantilla.html" "%~dp0%NOM%.html"
copy /Y "%~dp0css\plantilla.css" "%~dp0css\%NOM%.css"
copy /Y "%~dp0js\plantilla.js" "%~dp0js\%NOM%.js"

echo.
echo Fitxers creats correctament.

endlocal
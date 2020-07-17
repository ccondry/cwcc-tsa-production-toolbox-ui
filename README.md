# dCloud CWCC TSA Toolbox UI (production tenant)
This is the website UI code for the dCloud CWCC TSA Toolbox. It allows users to
log in and view, create, or modify demo configs for use with the dCloud Brand website.

## Installation
```sh
git clone https://gitlab.com/dcloud-collab/cwcc-tsa-prod-toolbox-ui.git
cd cwcc-tsa-prod-toolbox-ui
npm install
```

## Build/Run in Development
```sh
npm run dev
```

## Build/Run in Production
Copy files to your www/html folder (or wherever you have your web server pointing to).
```sh
npm run build
cp cwcc-tsa-prod-toolbox-ui/dist/* /var/www/html/
```

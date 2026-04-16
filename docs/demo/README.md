# Demo em desktop (capturas locais)

As imagens PNG nesta pasta são geradas localmente e não são versionadas.

Para reproduzir:

1. Subir o app: `npx next dev --port 3000 --hostname 127.0.0.1`
2. Instalar o Chrome do Puppeteer (uma vez): `npx puppeteer browsers install chrome`
3. Gerar as capturas: `PORT=3000 node scripts/portfolio-demo-screenshots.mjs`

Os arquivos `01-home-top.png`, `02-home-mid.png` e `03-home-footer.png` aparecem aqui (viewport 1440×900).

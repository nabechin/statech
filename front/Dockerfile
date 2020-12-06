# ベースイメージの作成
FROM node:15.3.0-alpine3.12
# コンテナ内で作業するディレクトリを指定
WORKDIR /myapp
# package.jsonとyarn.lockを/usr/src/appにコピー
COPY ["./client/package.json", "./client/yarn.lock", "./"]
# パッケージをインストール
RUN yarn install
# ファイルを全部作業用ディレクトリにコピー
COPY . .
# コンテナを起動する際に実行されるコマンド
WORKDIR /myapp/client

ENTRYPOINT [ "yarn", "start" ]
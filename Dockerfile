# ベースイメージ（node）を指定。それを front と名前をつける
FROM node as front

# ワークディレクトリを指定
WORKDIR /app
# PCの現在の場所のディレクトリ（./）を /app/ へコピー
COPY ./ /app/

# コンテナ（front）で npm install を実行
RUN npm install
# コンテナ（front）で npm run build を実行
RUN npm run build

# 以下でも動くハズです。
# RUN yarn install
# RUN yarn run build

# ベースイメージ（nginx）を指定
FROM nginx
# nginx の html ファイルをディレクトリ毎削除
RUN rm -rf /usr/share/nginx/html
# コンテナ（front）の /app/public を /usr/share/nginx/html へコピー
COPY --from=front /app/public/ /usr/share/nginx/html
# nginx の設定ファイル（default.conf）を /etc/nginx/conf.d/default.conf へコピー
COPY default.conf /etc/nginx/conf.d/default.conf
"use strict";(function(){const t={encode:!1,tokenize:function(e){return e.replace(/[\x00-\x7F]/g,"").split("")}};t.doc={id:"id",field:["title","content"],store:["title","href","section"]};const e=FlexSearch.create("balance",t);window.bookSearchIndex=e,e.add({id:0,href:"/ja/docs/getting-started/windows/",title:"Windowsの場合",section:"導入方法",content:` Windowsの場合 # ダウンロード # GitHubのReleasesから、windows.zip をダウンロードします。
展開 # ダウンロードしたzipファイルを任意の場所に展開してください。
起動 # Telloと接続してから、展開したフォルダに含まれている Scratch3-Tello.exe を起動してください。
起動したら、左下の拡張機能ボタンを押し、「Tello」と書かれた拡張機能をクリックしてください。ドローンをプログラミングするためのブロックが表示されます。
トラブルシューター # 「離陸する」ブロックを実行してもTelloが離陸しない場合は、別のブロックが送信したコマンドが実行待ちになっている可能性があります。「実行待ちのコマンドをクリアする」ブロックを実行することで解決します。
`}),e.add({id:1,href:"/ja/docs/development/build-env/",title:"環境構築",section:"開発",content:" 環境構築 # scratch3-tello リポジトリには scratch-vm と scratch-gui リポジトリに対する差分がファイル単位で格納されています。そのため、scratch3-telloをビルドするためには、scratch-vm と scratch-gui をクローンしてから、差分を適用する必要があります。\nRequirements # wget git node.js npm 作業用フォルダの作成 # $ mkdir scratch3-tello $ cd scratch3-tello 環境構築用スクリプトをダウンロードする # $ wget https://raw.githubusercontent.com/kebhr/scratch3-tello/master/build.sh $ chmod +x build.sh 環境構築用スクリプトを実行する # $ ./build.sh build.sh を実行することで、自動的に scratch-vm, scratch-gui, scratch-desktop がクローンされ、scratch3-tello で管理されている変更差分が適用されます。\nScratch3-Tello の起動 # $ cd scratch-desktop $ npm start パッケージを作成 # $ cd scratch-desktop $ npm run dist "}),e.add({id:2,href:"/ja/docs/getting-started/macos/",title:"macOSの場合",section:"導入方法",content:` macOSの場合 # ダウンロード # GitHubのReleasesから、macos.zip をダウンロードします。
展開 # ダウンロードしたzipファイルを任意の場所に展開してください。
起動 # Telloと接続してから、展開したフォルダに含まれている Scratch3-Tello.app を起動してください。
初回のみ、macOSのセキュリティ機能により、ダブルクリックでアプリを開くことはできません。 Controlキーを押しながらファイルをクリックし、表示されたメニューから「開く」を選択することで、開くことができます。
起動したら、左下の拡張機能ボタンを押し、「Tello」と書かれた拡張機能をクリックしてください。ドローンをプログラミングするためのブロックが表示されます。
トラブルシューター # 「離陸する」ブロックを実行してもTelloが離陸しない場合は、別のブロックが送信したコマンドが実行待ちになっている可能性があります。「実行待ちのコマンドをクリアする」ブロックを実行することで解決します。
`}),e.add({id:3,href:"/ja/docs/development/i18n/",title:"多言語対応",section:"開発",content:` 多言語対応 # NOTE: 翻訳の追加・更新に関して、Pull-Requestを受け付けています。翻訳するスキルがあるが、GitHubに詳しくない場合には、お問い合わせフォームからご連絡いただければ、Scratch3-Telloに翻訳を反映させることができます。
ブロック名は scratch-vm/src/extensions/scratch3_tello/index.js に定義されています。このファイルに記述されている message オブジェクトが i18n に使用されます。
message['内部ブロックコード']['言語コード'] が、そのブロックのその言語でのブロック名を表しています。
例 # たとえば、離陸する ブロックをドイツ語に翻訳してみましょう。現時点では、message['takeoff'] は次のようになっています。
const message = { takeoff: { \u0026#39;ja\u0026#39;: \u0026#39;離陸する\u0026#39;, \u0026#39;ja-Hira\u0026#39;: \u0026#39;りりくする\u0026#39;, \u0026#39;en\u0026#39;: \u0026#39;takeoff\u0026#39;, }, // ... }; ドイツ語を表す言語コードは de です。message['takeoff']['de'] が abheben となるように、次のように編集します。
const message = { takeoff: { \u0026#39;ja\u0026#39;: \u0026#39;離陸する\u0026#39;, \u0026#39;ja-Hira\u0026#39;: \u0026#39;りりくする\u0026#39;, \u0026#39;en\u0026#39;: \u0026#39;takeoff\u0026#39;, \u0026#39;de\u0026#39;: \u0026#39;abheben\u0026#39;, }, // ... }; これで完了です。
`}),e.add({id:4,href:"/ja/docs/getting-started/linux/",title:"Linuxの場合",section:"導入方法",content:` Linuxの場合 # 現在のところ、Linux向けのビルド済みバイナリは提供していません。Linux上で動作させる場合は、環境構築#パッケージを作成 を読み、ご自身でビルド・パッケージングしてください。
NOTE: Ubuntu 18.04.1 で正常に動作することを確認しています。
`}),e.add({id:5,href:"/ja/docs/privacy/",title:"プライバシーポリシー",section:"Docs",content:` プライバシーポリシー # アクセス解析について # このサイトでは、Googleによるアクセス解析ツール「Google Analytics」を使用しています。Google Analyticsはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定することはできません。 この機能はCookieを無効にすることで無効化することができます。Google Analyticsについての詳細は こちら をご覧ください。
`}),e.add({id:6,href:"/ja/docs/contact/",title:"お問い合わせ",section:"Docs",content:` お問い合わせ # お問い合わせ・ご連絡はこちらのフォームよりお受けしております。
数日以内に返信しますが、すべてのお問い合わせには返信できない場合があります。
`})})()
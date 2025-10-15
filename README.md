# 🚀 Vercel自動デプロイテスト

このプロジェクトは、GitHubにプッシュした際にVercelが自動デプロイしてくれるかどうかをテストするためのシンプルなNext.jsアプリケーションです。

## 📋 機能

- ✅ デプロイ成功の確認表示
- ⏰ リアルタイムのタイムスタンプ
- 📊 環境情報の表示
- 🎨 美しいUIデザイン

## 🛠️ セットアップ手順

### 1. 依存関係のインストール

\`\`\`bash
npm install
\`\`\`

### 2. ローカル開発サーバーの起動

\`\`\`bash
npm run dev
\`\`\`

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認してください。

## 🚀 Vercelデプロイ手順

### 1. GitHubリポジトリの作成

1. GitHubで新しいリポジトリを作成
2. このプロジェクトをプッシュ

\`\`\`bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/あなたのユーザー名/リポジトリ名.git
git push -u origin main
\`\`\`

### 2. Vercelでのプロジェクト連携

1. [Vercel](https://vercel.com)にアクセス
2. 「New Project」をクリック
3. GitHubリポジトリを選択
4. フレームワーク設定：
   - Framework Preset: **Next.js**
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
5. 「Deploy」をクリック

### 3. 自動デプロイのテスト

1. コードを編集（例：`app/page.tsx`のタイトルを変更）
2. 変更をコミット・プッシュ

\`\`\`bash
git add .
git commit -m "Test automatic deployment"
git push
\`\`\`

3. Vercelのダッシュボードで自動デプロイが開始されることを確認
4. 数分後にサイトが更新されることを確認

## 🔧 トラブルシューティング

### 自動デプロイが動かない場合

1. **GitHub連携の確認**
   - VercelでGitHubアカウントが正しく連携されているか
   - リポジトリへのアクセス権限があるか

2. **ビルド設定の確認**
   - `vercel.json`の設定が正しいか
   - `package.json`のscriptsが正しいか

3. **環境変数の確認**
   - 必要な環境変数が設定されているか

4. **ログの確認**
   - Vercelのダッシュボードでビルドログを確認

## 📁 プロジェクト構成

\`\`\`
simple-vercel/
├── app/
│   ├── globals.css      # グローバルスタイル
│   ├── layout.tsx       # レイアウトコンポーネント
│   └── page.tsx         # メインページ
├── package.json         # 依存関係とスクリプト
├── next.config.js       # Next.js設定
├── vercel.json          # Vercel設定
├── .gitignore          # Git除外ファイル
└── README.md           # このファイル
\`\`\`

## 🎯 次のステップ

1. より複雑な機能を追加してテスト
2. 環境変数の設定をテスト
3. データベース連携をテスト
4. APIルートのテスト

## 📞 サポート

何か問題が発生した場合は、以下を確認してください：

- [Vercel公式ドキュメント](https://vercel.com/docs)
- [Next.js公式ドキュメント](https://nextjs.org/docs)
- [GitHub Actions](https://docs.github.com/en/actions)

---

**Happy Deploying! 🎉**

export default function Home() {
  const currentTime = new Date().toLocaleString('ja-JP')

  return (
    <main className="container">
      <h1>✨ Vercel自動デプロイテスト - アニメーション版！</h1>
      
      <div className="status-card">
        <h2>✅ デプロイ成功！</h2>
        <p>このページが表示されているということは、Vercelの自動デプロイが正常に動作しています。</p>
      </div>

      <div className="info-section">
        <h3>📊 デプロイ情報</h3>
        <ul>
          <li><strong>現在時刻:</strong> {currentTime}</li>
          <li><strong>環境:</strong> {process.env.NODE_ENV || 'development'}</li>
          <li><strong>プラットフォーム:</strong> Vercel</li>
        </ul>
      </div>

      <div className="instructions">
        <h3>🔧 次のステップ</h3>
        <ol>
          <li>このファイルを編集して変更を加える</li>
          <li>GitHubにコミット・プッシュする</li>
          <li>Vercelが自動でデプロイを開始することを確認する</li>
          <li>数分後にこのページが更新されることを確認する</li>
        </ol>
      </div>

      <div className="test-area">
        <h3>🧪 テスト用カウンター</h3>
        <p>このセクションに何か追加して、デプロイが反映されているかテストしてください。</p>
        <p><strong>🎨 美しいアニメーション効果！</strong> この変更が表示されていれば、Vercelの自動デプロイが正常に動作しています。</p>
        <p><strong>✨ ホバーエフェクト</strong> カードにマウスを乗せると、美しいアニメーションが表示されます！</p>
      </div>
    </main>
  )
}

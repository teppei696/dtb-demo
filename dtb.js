// IFrame Player API の読み込み
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// YouTubeの埋め込み
function onYouTubeIframeAPIReady() {
	ytPlayer = new YT.Player(
		'movie', // 埋め込む場所の指定
		{
			width: 640, // プレーヤーの幅
			height: 390, // プレーヤーの高さ
			videoId: 'Oxlog2ycIcE', // YouTubeのID
			// イベントの設定
			events: {
				'onReady': onPlayerReady // プレーヤーの準備ができたときに実行
			}
		}
	);
}

var playerReady = false;
// プレーヤーの準備ができたとき
function onPlayerReady(event) {
	playerReady = true;
}

$(function() {
	// 再生
	$('#play').click(function() {
		// playerReadyがtrueのときだけ実行
		if(playerReady) {
			ytPlayer.playVideo();
		}
	});
	// 一時停止
	$('#pause').click(function() {
		// playerReadyがtrueのときだけ実行
		if(playerReady) {
			ytPlayer.pauseVideo();
		}
	});
	// 1分前へ
	$('#prev').click(function() {
		// playerReadyがtrueのときだけ実行
		if(playerReady) {
			// 現在の再生時間取得
			var currentTime = ytPlayer.getCurrentTime();
			// シークバーの移動
			ytPlayer1.seekTo(currentTime - 60);
		}
	});
	// 1分先へ
	$('#next').click(function() {
		// playerReadyがtrueのときだけ実行
		if(playerReady) {
			// 現在の再生時間取得
			var currentTime = ytPlayer.getCurrentTime();
			// シークバーの移動
			ytPlayer1.seekTo(currentTime + 60);
		}
	});
});

<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <title>パスワード・ユーザー名生成アプリ</title>
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
  <?php
      $con = mysql_connect('localhost','g127kato','') or die("接続失敗"); //mysqlに接続
      mysql_select_db('g127kato') or die("選択失敗"); //データベース接続
      mysql_query('SET NAMES utf8', $con);

      $sql1 = "SELECT word FROM name_top"; //name_topの全属性の単語を取得
      $res = mysql_query($sql1, $con) or die("エラー");
      $i = 0;
      while ($db = mysql_fetch_assoc($res)) {
          $array[$i] = $db['word'];
          $i++;
      }
          $json_array1 = json_encode($array);//javascriptに変換するためにjson形式にする
          unset($array);

      $sql2 = "SELECT word FROM name_top WHERE attributes = 'action'"; //name_topのアクション系の単語を取得
      $res = mysql_query($sql2, $con) or die("エラー");
      $i = 0;
      while ($db = mysql_fetch_assoc($res)) {
          $array[$i] = $db['word'];
          $i++;
      }
          $json_array2 = json_encode($array);//javascriptに変換するためにjson形式にする
          unset($array);

      $sql3 = "SELECT word FROM name_top WHERE attributes = 'fantasy'"; //name_topのファンタジー系の単語を取得
      $res = mysql_query($sql3, $con) or die("エラー");
      $i = 0;
      while ($db = mysql_fetch_assoc($res)) {
          $array[$i] = $db['word'];
          $i++;
      }
          $json_array3 = json_encode($array);//javascriptに変換するためにjson形式にする
          unset($array);

      $sql4 = "SELECT word FROM name_top WHERE attributes = 'comedy'"; //name_topのコメディ系の単語を取得
      $res = mysql_query($sql4, $con) or die("エラー");
      $i = 0;
      while ($db = mysql_fetch_assoc($res)) {
          $array[$i] = $db['word'];
          $i++;
      }
          $json_array4 = json_encode($array);//javascriptに変換するためにjson形式にする

      $sql5 = "SELECT word FROM name_top WHERE attributes = 'real'"; //name_topの日常系の単語を取得
      $res = mysql_query($sql5, $con) or die("エラー");
      $i = 0;
      while ($db = mysql_fetch_assoc($res)) {
          $array[$i] = $db['word'];
          $i++;
      }
          $json_array5 = json_encode($array);//javascriptに変換するためにjson形式にする
          unset($array);

      $sql6 = "SELECT word FROM name_bottom"; //name_bottomから単語を取得
      $res = mysql_query($sql6, $con) or die("エラー");
      $i = 0;
      while ($db = mysql_fetch_assoc($res)) {
          $array[$i] = $db['word'];
          $i++;
      }
          $json_array6 = json_encode($array);//javascriptに変換するためにjson形式にする
          unset($array);
    
      mysql_close($con);
    ?>
      <script type="text/javascript">
        var a1,a2,a3,a4,a5,a6;
      a1 = JSON.parse('<?php echo $json_array1; ?>');//php->javascript形式で配列に保存する
      a2 = JSON.parse('<?php echo $json_array2; ?>');
      a3 = JSON.parse('<?php echo $json_array3; ?>');
      a4 = JSON.parse('<?php echo $json_array4; ?>');
      a5 = JSON.parse('<?php echo $json_array5; ?>');
      a6 = JSON.parse('<?php echo $json_array6; ?>');
      </script>
    <div class="container">
      <ul class="menu">
        <li><a href="#" class="active" data-id="about" data-pass="pass_caution">パスワード詳細設定</a></li>
        <li><a href="#" data-id="service" data-pass="user_caution">ユーザ名詳細設定</a></li>
      </ul>
      <section class="content active" id="about">
        <p>パスワード詳細設定</p>
        <div>  
          <label for="text_top">入れたい文字列(先頭)</label>
          <input type="text" id="text_top" onInput="checkForm(this.id)">
        </div>
        <div>
          <label for="text_bottom">入れたい文字列(末尾)</label>
          <input type="text" id="text_bottom" onInput="checkForm(this.id)">
        </div>
        <div>
        <label for="text_length">文字数</label>
        <input type="number" id="text_length" value="1" min="1" max="20">
        </div>
        <div> 
          <div>文字種</div>
          <label><input type="radio" name="text_kind" value="2" checked> ランダム</label>
          <label><input type="radio" name="text_kind" value="1"> 小文字のみ</label>
          <label><input type="radio" name="text_kind" value="0"> 大文字のみ</label>
        </div>
        <div> 
          <div>数字</div>
          <label><input type="radio" name="num_kind" value="1" checked> 数字あり</label>
          <label><input type="radio" name="num_kind" value="0"> 数字無し</label>
        </div>
        <button class="clear_pass" onClick="pass_clear()">
          クリア
        </button>
      </section>
      <section class="content" id="service">
        <p>ユーザ名詳細設定</p>
        <div>  
          <label for="name">入れたい文字列</label>
          <input type="text" id="name">
          <label><input type="radio" name="name_position" checked> 指定なし</label>
          <label><input type="radio" name="name_position"> 先頭</label>
          <label><input type="radio" name="name_position"> 末尾</label>
        </div>
        <div>
        <div class="type">
            <div class="box1"><label><input type="radio" name="name_type" checked>指定なし</label></div>
            <div class="box2"><label><input type="radio" name="name_type">アクション系</label></div>
            <div class="box3"><label><input type="radio" name="name_type">ファンタジー系</label></div>
            <div class="box4"><label><input type="radio" name="name_type">コメディ系</label></div>
            <div class="box5"><label><input type="radio" name="name_type">日常系</label></div>
          </div>

        </div>
        <button class="clear_name" onClick="name_clear()">
          クリア
        </button>
      </section>
      <input type="text" id="ans" readonly>
      <button id="generation" onClick="change_button()">生成</button>
      <div class="content caution active" id="pass_caution">
        <p>パスワード生成</p>
        <ul>
          お好みのパスワードを自動生成します。パスワードに入れたい文字列を入力し、文字数、文字種、数字を指定して、『生成』ボタンをクリックしてください。​<br>
          パスワードに入れたい文字列＋文字数分のランダム文字列のパスワードが生成されます。​<br>
          入れたい文字列がない場合はすべて自動生成されます。​<br>
          <div class="attention">※ひらがな、カタカナ、漢字は使用できません。</div>
        </ul>
      </div>
      <div class="content caution" id="user_caution">
        <p>ユーザー名​</p>
        <ul>
          お好みの名前を自動生成します。​​<br>
          ​​入れたい文字列を指定して、『生成』ボタンをクリックしてください。<br>
          入れたい文字列がない場合はすべて自動生成されます。
        </ul>
      </div>
    <script type="text/javascript" src="js/main.js"></script>
  </body>
</html>

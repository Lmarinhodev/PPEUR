<?php
    include("conexao.php");

if(isset($_FILES['arquivo'])){
    $arquivo = $_FILES['arquivo'];

    if($arquivo['error'])
        die("Falha ao enviar o arquivo");

    $pasta = "arquivos/";
    $nomeDoArquivo = $arquivo['name'];
    $novoNomeDoArquivo = uniqid();
    $extensao = strtolower(pathinfo($nomeDoArquivo, PATHINFO_EXTENSION));

    if($extensao != "jpg" && $extensao != 'png' && $extensao != 'pdf')
        die("Tipe de arquivo não aceito");

    $path = $pasta . $novoNomeDoArquivo . '.' . $extensao;

    $deu_certo = move_uploaded_file($arquivo["tmp_name"], $path);
    
    if($deu_certo){
        $mysqli->query("INSERT INTO ficha (conjunto, etapa, partido, cartografia_path, mapauso_path, fotosant_path, fotosrec_path, jornal_path) VALUES('$nomeDoArquivo', '$nomeDoArquivo', '$nomeDoArquivo', '$path', '$path', '$path', '$path', '$path')") or die(mysqli->error);
        echo "<p>Arquivo enviado com sucesso!</p>";
    }else
        echo "<p>Falha ao enviar arquivo</p>";

    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="POST" enctype="multipart/form-data" action="">
            <p><label for="">Selecione o arquivo</label>
            <input name="arquivo" type="file"></p>
            <button name="upload" type="submit">Enviar arquivo</button>
    </form>
    <h1>Lista de arquivos</h1>

    <form action="">
        <input name="busca" placeholder="Pesquise" type="text">
        <button type="submit">Pesquisar</button>
    </form>
    <table border="1" width="600px">
        <thead>
            <th>Imagem</th>
            <th>Arquivo</th>
        </thead>
        <tbody>
        <?php
        $pesquisa = $_GET['busca'];
        $sql_code = "SELECT * FROM ficha WHERE id LIKE '%$pesquisa%' OR conjunto LIKE '%$pesquisa%'";
        $sql_query = $mysqli->query($sql_code) or die("ERROR AO CONSULTAR" . $mysqli->error);
        while($arquivo = $sql_query->fetch_assoc()){
        ?>
        <tr>
            <td><img width="175" src="<?php echo $arquivo['cartografia_path']?>" alt=""></td>
            <td><?php echo $arquivo['conjunto']; ?></td>
        </tr>
        <?php    
        }
        ?>

    
    
    
            </tbody>
    </table>
    
    
</body>
</html>
Jekyll::Hooks.register :site, :post_write do |site|
    require 'json'
  
    # Caminho para a pasta com as imagens
    images_dir = File.join(site.source, 'img/galeria/')
  
    # Lista de imagens
    images = Dir.children(images_dir).select { |f| File.file?(File.join(images_dir, f)) }

    # Gera o JSON
    File.write(File.join(site.dest, 'json/galeria.json'), { imagens: images }.to_json)

    puts 'site.dest'
  end
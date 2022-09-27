// Get all the images
image_array = [
    'nayeon.jpg',
    'jeongyeon.jpg',
    'momo.jpg',
    'sana.jpg',
    'jihyo.jpg',
    'mina.jpg',
    'dahyun.jpg',
    'chae.jpg',
    'tzuyu.jpg',
    'btsjpg.jpg',
    'tata.jpg',
    'c.jpg',
    'd.jpg',
    'mn.jpg',
    'd1.jpg',
    's.jpg',
    'm.jpg',
    'n.jpg',
    '2521.jpg',
    'wish.jpg',
    'money.jpg',
    'still.jpg',
    '21.jpg',
    'winner.jpg',
    'summer.jpg',
    'fail.jpg',
    'bad.jpg',
    'numb.jpg',
    'happy.jpg'
    
  ]
  
  function get_random_image(){
    // Get a random index
    random_index = Math.floor(Math.random() * image_array.length);
  
    // Get an image at the random_index
    selected_image = image_array[random_index]
  
    // Display the image
    document.getElementById('image_shower').src = `./images/${selected_image}`
  }
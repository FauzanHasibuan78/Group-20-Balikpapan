async function addAlltracking() {
    const nomorResi = document.getElementById('nomor-resi').value; 
  
    try {
      const response = await fetch(`${API_BASE_URL}/tracking`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          },

          body: JSON.stringify({ nomorResi }) 
      });
      const data = await response.json();
      
      // Menampilkan hasil pelacakan di div output-box1
      const outputBox1 = document.getElementById('output-box1');
      outputBox1.innerHTML = `
        Nomor Resi: ${nomorResi}<br>
        Nama Penerima: ${data.receiverName}<br>
        Nomor HP: ${data.receiverPhoneNumber}<br>
        Status Pengiriman: ${data.status}
      ${JSON.stringify(data)}`;
  } catch (error) {
      console.error('Tidak dapat menemukan nomor resi Anda: ', error);
  } 
}



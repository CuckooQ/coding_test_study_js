{
    const srcDirectory = "./src/";
    const extension = '.js';

    function loadTests(){
        const directories = ['s1', 's2', 's3', 's4'];  
        const fileCounts = [17, 7, 5, 1];
        directories.forEach((directory, idx) => {
            const fileCount = fileCounts[idx];
            for(let i=1; i<=fileCount; i++) {
                const fileName = `${directory}p${i}`;
                const path = srcDirectory + `${directory}/` + fileName + extension; 
                const script = document.createElement("script");
                script.src = path;
                document.head.appendChild(script);
            }
        });
    }
    
    function loadCommon(){
        const fileName = "common";
        const path = srcDirectory + fileName + extension; 
        const script = document.createElement("script");
        script.src = path;
        document.head.appendChild(script);
    }
    
    loadCommon();
    loadTests();
}
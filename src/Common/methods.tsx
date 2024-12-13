export function formatDate(dateString:any) {
    const date = new Date(dateString);

    // Extract day, month, and year
    const day = String(date.getDate()).padStart(2, '0'); // Ensure 2 digits
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = date.getFullYear();

    // Format as dd/MM/yyyy
    return `${day}/${month}/${year}`;
}

export const getCurrentLocation = (): Promise<{ latitude: number; longitude: number }> => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    resolve({ latitude, longitude });
                },
                (error) => {
                    reject(`Error retrieving location: ${error.message}`);
                }
            );
        } else {
            reject("Geolocation is not supported by this browser.");
        }
    });
};

// export function createNameProfile(word: string,word2:string): string {
//     if (word.trim().length === 0) {
//         throw new Error("Input must be a non-empty string.");
//     }
    
//     return word.trim()[0]+ word2.trim()[0];
// }



export function createNameProfileImage(word: any, word2: any): string {
    if (word.trim().length === 0 || word2.trim().length === 0) {
        throw new Error("Inputs must be non-empty strings.");
    }

    // Get the initials from the two words
    const initials = word.trim()[0].toUpperCase() + word2.trim()[0].toUpperCase();

    // Create a canvas element
    const canvas = document.createElement("canvas");
    const size = 100; // Set size for the canvas (width and height)
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext("2d");
    if (ctx) {
        // Draw background
        ctx.fillStyle = "green"; // Background color
        ctx.fillRect(0, 0, size, size);

        // Draw the initials
        ctx.fillStyle = "white"; // Text color
        ctx.font = `${size / 2}px Arial`; // Font size
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(initials, size / 2, size / 2);
    }

    // Return the image as a data URL
    return canvas.toDataURL("image/png");
}


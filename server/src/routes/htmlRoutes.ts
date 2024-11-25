import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { Response, Router } from 'express';

const router = Router();

// TODO: Define route to serve index.html
if (process.env.PORT) {
    router.get('*', (_, responseObj: Response) => {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);

        responseObj.sendFile(path.join(__dirname, '../../../client/dist/index.html'));
    });
}

export default router;

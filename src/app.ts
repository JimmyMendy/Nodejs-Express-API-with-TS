//dependancies
import express from 'express';
import bodyParser from 'body-parser';

//Routes
import todosRoutes from './routes/todos';

const app = express();

app.use(bodyParser.json());
app.use(todosRoutes);

app.listen(3000);
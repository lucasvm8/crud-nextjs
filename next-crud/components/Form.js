import { 
  Box, 
  TextField, 
  Grid, 
  Button, 
  Typography
} from "@mui/material";

function Form({ name }) {
  return (
    <Box>
      <Grid   
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <Typography variant="h4" gutterBottom> Cadastrar Pessoa </Typography>
        <Grid item xs={2} >
          <item>
            <TextField id="outlined-basic" label="Nome" variant="outlined" />
          </item>
        </Grid>
        <Grid item xs={2} >
          <item>
            <TextField id="outlined-basic" label="Email" variant="outlined" />
          </item>
        </Grid>
        <Grid item xs={2} >
          <item>
            <Button variant="outlined"> {name} </Button>
          </item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Form
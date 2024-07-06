import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { Field, FieldProps, Form, Formik } from "formik";
import * as Yup from "yup";
import { FormControl } from "@mui/material";
import { dotPulse } from "ldrs";
import theme from "../theme";
import { useNavigate } from "react-router-dom";

interface LoginFormValues {
  email: string;
  password: string;
}

export default function SignInSide() {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email inválido").required("Email é obrigatório"),
    password: Yup.string()
      .min(6, "A senha deve ter pelo menos 6 caracteres")
      .required("Senha é obrigatória"),
  });

  const onSubmit = (
    values: LoginFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      setTimeout(() => {
        console.log(`Logando: ${(values.email, values.password)}`);
        setSubmitting(false);
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      setSubmitting(false);
    }
  };

  dotPulse.register();

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url("https://picsum.photos/1920/1080?grayscale")`,
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[900]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "left",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form>
                <Box sx={{ mt: 2 }} minWidth={"100%"}>
                  <FormControl sx={{ pb: 2 }} fullWidth>
                    <Field name="email">
                      {({ field }: { field: FieldProps }) => (
                        <TextField
                          {...field}
                          label="Email"
                          variant="outlined"
                          error={touched.email && Boolean(errors.email)}
                          helperText={touched.email && errors.email}
                        />
                      )}
                    </Field>
                  </FormControl>
                  <FormControl sx={{ pb: 2 }} fullWidth>
                    <Field name="password">
                      {({ field }: { field: FieldProps }) => (
                        <TextField
                          {...field}
                          label="Senha"
                          type="password"
                          variant="outlined"
                          error={touched.password && Boolean(errors.password)}
                          helperText={touched.password && errors.password}
                        />
                      )}
                    </Field>
                  </FormControl>

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={isSubmitting}
                    sx={{ mt: 3, mb: 2, height: 40, minWidth: 200 }}
                  >
                    {isSubmitting ? (
                      <l-dot-pulse
                        size="40"
                        speed="1.3"
                        color={theme.palette.grey[400]}
                      ></l-dot-pulse>
                    ) : (
                      "Entrar"
                    )}
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Grid>
    </Grid>
  );
}

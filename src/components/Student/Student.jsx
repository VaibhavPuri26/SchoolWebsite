import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardHeader,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import "./student.css";

const Student = () => {
  return (
    <div className="student-section" id="student">
      <Typography variant="h3" className="student-title">
        Student Life at Springdale
      </Typography>

      <div className="student-container">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card className="card">
              <CardHeader
                title="Extracurricular Activities"
                className="card-header"
              />
              <CardContent>
                <List>
                  <ListItem>
                    <ListItemText primary="Music" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Dance" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Drama" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Art" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Sports" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Robotics" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Debate Club" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Science Club" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className="card">
              <CardHeader title="Clubs and Societies" className="card-header" />
              <CardContent>
                <List>
                  <ListItem>
                    <ListItemText primary="Literary Society" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Environmental Club" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Astronomy Club" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Coding Club" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className="card">
              <CardHeader
                title="Achievements and Accolades"
                className="card-header"
              />
              <CardContent>
                <List>
                  <ListItem>
                    <ListItemText primary="John Smith - National Level Math Olympiad Winner" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Sarah Lee - Gold Medalist in State Swimming Championship" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Tech Innovators Club - Winners of Inter-School Robotics Competition" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className="card">
              <CardHeader title="Student Council" className="card-header" />
              <CardContent>
                <List>
                  <ListItem>
                    <ListItemText primary="President: Amy Parker, Grade 12" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Vice President: Rajiv Mehta, Grade 11" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Secretary: Lisa Wong, Grade 10" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Student;

import './content.scss'
import Label from '../../components/Label/label'
import Grid from '@material-ui/core/Grid'
import Panel from '../../components/Panel/panel'

const Content: React.FC = () => (
  <div className="content">
    <Grid container direction="row">
      <Grid item xs={6}>
        <Label value="20" unit="bar" className="label success" />
      </Grid>
      <Grid item xs={6}>
        Content
      </Grid>

      <Grid item xs={12}>
        <Panel />
      </Grid>
      <Grid item xs={3}>
        Content
      </Grid>
      <Grid item xs={3}>
        Content
      </Grid>
      <Grid item xs={3}>
        Content
      </Grid>

      <Grid item xs={3}></Grid>
    </Grid>
  </div>
)
export default Content

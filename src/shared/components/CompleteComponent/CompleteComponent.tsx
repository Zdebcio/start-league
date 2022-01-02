import { Typography } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import { colors } from 'config'

export interface ICompleteComponent {
  text: string
  width?: string | number
  fontSize?: string | number
}

const CompleteComponent: React.FC<ICompleteComponent> = ({
  text,
  width = '100%',
  fontSize,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width,
        margin: '0 auto',
      }}
    >
      <CheckCircleOutlineIcon
        sx={{
          color: colors.typography.success,
          width: '60%',
          height: '60%',
        }}
      />
      <Typography
        variant="h1"
        component="span"
        align="center"
        style={fontSize ? { fontSize } : {}}
      >
        {text}
      </Typography>
    </div>
  )
}

export default CompleteComponent

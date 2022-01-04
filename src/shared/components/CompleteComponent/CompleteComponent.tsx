import { Typography } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import { colors } from 'config'
import { CompleteComponentWrapper } from './CompleteComponent.style'

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
    <CompleteComponentWrapper sx={{ width }}>
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
    </CompleteComponentWrapper>
  )
}

export default CompleteComponent

import CopyrightIcon from '@mui/icons-material/Copyright';

export function Footer() {
    return (
        <div style={{
            bottom: 0,
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <CopyrightIcon />
            <p>Whybot</p>
        </div>
    )
}
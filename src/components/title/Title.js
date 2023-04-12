import { mdiDotsVertical } from '@mdi/js'
import Menu from '../menu/Menu'
import  './title.css'

const Title = (props) => {
    const {title,link, renderLink, mb, mt} = props
    const styles = {
    marginBottom:mb&&mb,
   marginTop:mt&mt
    }
  return (
    <div className="header-title"  style={styles}>
       {title}
       {link&&renderLink&&  <span style={{ position: "fixed", right: 10 }}>
        <Menu
            icon={mdiDotsVertical}
            size={0.8}
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",
              marginTop: 5,
            }}
            content={link}
            // customtoggle={() => renderUserToggle("admin****nif@sgs.com")}
            render={renderLink}
          />
        </span>} 
      </div>

  )
}

export default Title
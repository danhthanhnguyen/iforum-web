import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import Avatar from "@mui/material/Avatar";
import ModeCommentRoundedIcon from "@mui/icons-material/ModeCommentRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

function Question() {
  return (
    <div className="question">
      <Card className="question-card" sx={{ minWidth: 275 }}>
        <CardActions className="question-rate">
          <KeyboardArrowUpRoundedIcon />
          <Typography className="question-rate__count" sx={{ fontSize: 14 }}>
            40
          </Typography>
          <KeyboardArrowDownRoundedIcon />
        </CardActions>
        <CardContent className="question-card__content">
          <Typography className="question-card__content--title" gutterBottom>
            Word of the Day
          </Typography>
          <span className="question-card__content--tag">tech</span>
          <Typography className="question-card__content--body">
            well meaning and kindly. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Qui minus fuga cupiditate numquam deleniti vero
            tempore. Quae quasi reiciendis eligendi suscipit maxime tenetur
            molestiae quos laborum vel quam, ea distinctio?
          </Typography>
          <p className="question-card__content--line"></p>
          <CardActions className="question-task">
            <div className="question-task__avatar-name">
              <Avatar
                alt="Remy Sharp"
                src="https://cafefcdn.com/thumb_w/650/203337114487263232/2021/8/28/photo1630119914849-16301199150061205830569.jpg"
                sx={{ width: 36, height: 36 }}
              />
              <div className="question-task__name">
                <span className="question-task__name--real-name">
                  Posted by Ronaldo
                </span>
                <span className="question-task__created-at">12h ago</span>
              </div>
            </div>
            <div className="question-task__like-comment">
              <div className="question-task__like">
                <FavoriteRoundedIcon />
                <span className="question-task__like--count">40</span>
              </div>
              <div className="question-task__comment">
                <ModeCommentRoundedIcon />
                <span className="question-task__comment--count">40</span>
              </div>
            </div>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
}

export default Question;

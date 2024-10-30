terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0"
    }
  }
}

provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "rg" {
  name     = "quiz-app-rg"
  location = "westus2"
}

resource "azurerm_static_web_app" "web" {
  name                = "quiz-app"
  resource_group_name = azurerm_resource_group.rg.name
  location           = azurerm_resource_group.rg.location
}